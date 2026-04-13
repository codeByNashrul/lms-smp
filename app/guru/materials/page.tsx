"use client";

import { useEffect, useMemo, useState } from "react";

type TeacherAssignment = {
  id: number;
  class_id: number;
  subject_id: number;
  class: { class_name: string };
  subject: { subject_name: string };
};

type MaterialItem = {
  id: number;
  title: string;
  description?: string | null;
  file_url?: string | null;
  class_id?: number;
  subject_id?: number;
  class?: { class_name: string } | null;
  subject?: { subject_name: string } | null;
};

const initialForm = {
  id: 0,
  selectedAssignment: "",
  title: "",
  description: "",
};

export default function GuruMaterialsPage() {
  const [assignments, setAssignments] = useState<TeacherAssignment[]>([]);
  const [items, setItems] = useState<MaterialItem[]>([]);
  const [form, setForm] = useState(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  async function load() {
    const [aRes, mRes] = await Promise.all([
      fetch("/api/guru/assignments"),
      fetch("/api/materials"),
    ]);

    const aData = await aRes.json();
    const mData = await mRes.json();

    setAssignments(aData.items || []);
    setItems(mData.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  const activeAssignment = useMemo(
    () => assignments.find((x) => String(x.id) === form.selectedAssignment),
    [assignments, form.selectedAssignment]
  );

  function resetForm() {
    setForm(initialForm);
    setFile(null);
    setIsEdit(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!activeAssignment) {
      setMessage("Pilih kelas dan mapel terlebih dahulu.");
      return;
    }

    if (!form.title.trim()) {
      setMessage("Judul materi wajib diisi.");
      return;
    }

    if (!isEdit && !file) {
      setMessage("File materi wajib dipilih.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("class_id", String(activeAssignment.class_id));
    formData.append("subject_id", String(activeAssignment.subject_id));

    if (isEdit) {
      formData.append("id", String(form.id));
    }

    if (file) {
      formData.append("file", file);
    }

    const res = await fetch("/api/materials", {
      method: isEdit ? "PATCH" : "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal menyimpan materi.");
      return;
    }

    setMessage(isEdit ? "Materi berhasil diperbarui." : "Materi berhasil disimpan.");
    resetForm();
    await load();
  }

  function startEdit(item: MaterialItem) {
    const assignment = assignments.find(
      (x) => x.class_id === item.class_id && x.subject_id === item.subject_id
    );

    setForm({
      id: item.id,
      selectedAssignment: assignment ? String(assignment.id) : "",
      title: item.title,
      description: item.description || "",
    });

    setFile(null);
    setIsEdit(true);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function removeItem(id: number) {
    const ok = confirm("Yakin ingin menghapus materi ini?");
    if (!ok) return;

    const res = await fetch(`/api/materials?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal menghapus materi.");
      return;
    }

    setMessage("Materi berhasil dihapus.");
    await load();
  }

  return (
    <div className="rounded-2xl p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Materi Pembelajaran
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Materi ini dapat diakses dan diunduh oleh siswa sesuai kelasnya.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="space-y-4 rounded-2xl p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {isEdit ? "Edit Materi" : "Tambah Materi"}
          </h2>

          {isEdit ? (
            <button
              type="button"
              onClick={resetForm}
              className="text-sm text-gray-500 underline"
            >
              Batal edit
            </button>
          ) : null}
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            Kelas & Mapel
          </label>
          <select
            value={form.selectedAssignment}
            onChange={(e) =>
              setForm({ ...form, selectedAssignment: e.target.value })
            }
            className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <option value="">-- Pilih assignment --</option>
            {assignments.map((x) => (
              <option key={x.id} value={x.id}>
                {x.class.class_name} - {x.subject.subject_name}
              </option>
            ))}
          </select>
        </div>

        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Judul materi"
        />

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Deskripsi materi"
        />

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            File Materi {isEdit ? "(opsional, isi jika ingin mengganti file)" : ""}
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          />
        </div>

        <button className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-xl shadow">
          {isEdit ? "Simpan Perubahan" : "Simpan"}
        </button>

        {message && (
          <p className="text-sm text-gray-600 dark:text-gray-300">{message}</p>
        )}
      </form>

      <div className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
        <div className="p-5 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Daftar Materi Saya
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                <tr>
                  <th className="text-left px-4 py-3">Judul</th>
                  <th className="text-left px-4 py-3">Kelas</th>
                  <th className="text-left px-4 py-3">Mapel</th>
                  <th className="text-left px-4 py-3">Aksi</th>
                </tr>
              </thead>

              <tbody>
                {items.map((x) => (
                  <tr
                    key={x.id}
                    className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                  >
                    <td className="px-4 py-3 font-medium">
                      {x.title}
                      <div className="text-xs text-gray-400 mt-1">
                        {x.description || "-"}
                      </div>
                    </td>

                    <td className="px-4 py-3">{x.class?.class_name || "-"}</td>
                    <td className="px-4 py-3">{x.subject?.subject_name || "-"}</td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        {x.file_url ? (
                          <a
                            href={x.file_url}
                            target="_blank"
                            className="text-blue-600 dark:text-blue-400 underline"
                          >
                            Lihat
                          </a>
                        ) : null}

                        <button
                          type="button"
                          onClick={() => startEdit(x)}
                          className="text-amber-600 underline"
                        >
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => removeItem(x.id)}
                          className="text-red-600 underline"
                        >
                          Hapus
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="p-5 text-sm text-gray-400">Belum ada materi pembelajaran.</p>
        )}
      </div>
    </div>
  );
}