"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type TeacherAssignment = {
  id: number;
  class_id: number;
  subject_id: number;
  class: { class_name: string };
  subject: { subject_name: string };
};

type PerangkatItem = {
  id: number;
  title: string;
  description?: string | null;
  file_url?: string | null;
  type: string;
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
  type: "modul",
};

export default function GuruPerangkatPage() {
  const [assignments, setAssignments] = useState<TeacherAssignment[]>([]);
  const [items, setItems] = useState<PerangkatItem[]>([]);
  const [form, setForm] = useState(initialForm);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  async function load() {
    const [aRes, pRes] = await Promise.all([
      fetch("/api/guru/assignments"),
      fetch("/api/perangkat"),
    ]);

    const aData = await aRes.json();
    const pData = await pRes.json();

    setAssignments(aData.items || []);
    setItems(pData.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  const activeAssignment = useMemo(
    () => assignments.find((x) => String(x.id) === form.selectedAssignment),
    [assignments, form.selectedAssignment],
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
      setMessage("Judul perangkat pembelajaran wajib diisi.");
      return;
    }

    if (!isEdit && !file) {
      setMessage("File perangkat pembelajaran wajib dipilih.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("description", form.description);
    formData.append("type", form.type);
    formData.append("class_id", String(activeAssignment.class_id));
    formData.append("subject_id", String(activeAssignment.subject_id));

    if (isEdit) {
      formData.append("id", String(form.id));
    }

    if (file) {
      formData.append("file", file);
    }

    const res = await fetch("/api/perangkat", {
      method: isEdit ? "PATCH" : "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal menyimpan perangkat.");
      return;
    }

    setMessage(
      isEdit
        ? "Perangkat pembelajaran berhasil diperbarui."
        : "Perangkat pembelajaran berhasil disimpan.",
    );

    resetForm();
    await load();
  }

  function startEdit(item: PerangkatItem) {
    const assignment = assignments.find(
      (x) => x.class_id === item.class_id && x.subject_id === item.subject_id,
    );

    setForm({
      id: item.id,
      selectedAssignment: assignment ? String(assignment.id) : "",
      title: item.title,
      description: item.description || "",
      type: item.type || "modul",
    });

    setFile(null);
    setIsEdit(true);
    setMessage("");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function removeItem(id: number) {
    const ok = confirm("Yakin ingin menghapus perangkat pembelajaran ini?");
    if (!ok) return;

    const res = await fetch(`/api/perangkat?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal menghapus perangkat.");
      return;
    }

    setMessage("Perangkat pembelajaran berhasil dihapus.");
    await load();
  }

  return (
    <div className="rounded-2xl p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Perangkat Pembelajaran
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Dokumen ini hanya dapat dilihat oleh guru.
        </p>
      </div>

      <form
        onSubmit={submit}
        className="space-y-4 rounded-2xl p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            {isEdit
              ? "Edit Perangkat Pembelajaran"
              : "Tambah Perangkat Pembelajaran"}
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

        <div className="grid md:grid-cols-2 gap-4">
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

          <div>
            <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
              Jenis Dokumen
            </label>
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
              className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
            >
              <option value="rpp">RPP</option>
              <option value="modul">Modul Ajar</option>
              <option value="lkpd">LKPD</option>
              <option value="silabus">Silabus</option>
            </select>
          </div>
        </div>

        <input
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Judul perangkat pembelajaran"
        />

        <textarea
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Deskripsi"
        />

        <div>
          <label className="block text-sm mb-1 text-gray-600 dark:text-gray-300">
            File Dokumen{" "}
            {isEdit ? "(opsional, isi jika ingin mengganti file)" : ""}
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
            Daftar Perangkat Saya
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
                  <th className="text-left px-4 py-3">Jenis</th>
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
                    <td className="px-4 py-3">
                      {x.subject?.subject_name || "-"}
                    </td>

                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-700">
                        {x.type}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        {x.file_url && (
                          <a
                            href={x.file_url}
                            target="_blank"
                            className="inline-flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100 transition"
                          >
                            <Eye size={16} />
                            Lihat
                          </a>
                        )}

                        <button
                          type="button"
                          onClick={() => startEdit(x)}
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-1.5 text-sm font-medium text-amber-600 hover:bg-amber-100 transition"
                        >
                          <Pencil size={16} />
                          Edit
                        </button>

                        <button
                          type="button"
                          onClick={() => removeItem(x.id)}
                          className="inline-flex items-center gap-1 rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100 transition"
                        >
                          <Trash2 size={16} />
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
          <p className="p-5 text-sm text-gray-400">
            Belum ada perangkat pembelajaran.
          </p>
        )}
      </div>
    </div>
  );
}
