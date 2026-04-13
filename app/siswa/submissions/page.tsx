"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Assignment = {
  id: number;
  title: string;
  description?: string | null;
  attachment_url?: string | null;
  subject?: { subject_name: string } | null;
  class?: { class_name: string } | null;
};

type Submission = {
  id: number;
  assignment_id: number;
  file_url?: string | null;
  status: string;
};

export default function SiswaSubmissionsPage() {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selected, setSelected] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  async function load() {
    const [aRes, sRes] = await Promise.all([
      fetch("/api/assignments"),
      fetch("/api/submissions"),
    ]);

    const aData = await aRes.json();
    const sData = await sRes.json();

    setAssignments(aData.items || []);
    setSubmissions(sData.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  function findMySubmission(assignmentId: number) {
    return submissions.find((x) => x.assignment_id === assignmentId);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    if (!selected) {
      setMessage("Pilih tugas terlebih dahulu.");
      return;
    }

    if (!file) {
      setMessage("Pilih file jawaban.");
      return;
    }

    const formData = new FormData();
    formData.append("assignment_id", selected);
    formData.append("file", file);

    const res = await fetch("/api/submissions", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal mengirim jawaban.");
      return;
    }

    setMessage(
      data.mode === "updated"
        ? "Jawaban berhasil diperbarui."
        : "Jawaban berhasil dikirim."
    );
    setFile(null);
    setSelected("");
    await load();
  }

  async function removeSubmission(id: number) {
    const ok = confirm("Yakin ingin menghapus submission ini?");
    if (!ok) return;

    const res = await fetch(`/api/submissions?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal menghapus submission.");
      return;
    }

    setMessage("Submission berhasil dihapus.");
    await load();
  }

  return (
    <div className="rounded-2xl min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col p-6 space-y-8">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Pengumpulan Tugas</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Upload file jawaban untuk tugas yang diberikan guru.
            </p>
          </div>
          
        </div>

        {/* Submission Form */}
        <form
          onSubmit={submit}
          className="space-y-4 border rounded-xl p-6 bg-white dark:bg-gray-800 shadow-lg"
        >
          <div>
            <label className="block text-sm mb-1">Pilih Tugas</label>
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
            >
              <option value="">-- Pilih tugas --</option>
              {assignments.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">File Jawaban</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-gray-200"
            />
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Kirim Jawaban
          </button>

          {message && <p className="text-sm text-gray-700 dark:text-gray-300">{message}</p>}
        </form>

        {/* List Submissions */}
        <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
  <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
    <thead className="bg-gray-100 dark:bg-gray-700">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Judul</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Mata Pelajaran</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Kelas</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Deskripsi</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Status</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Lampiran</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Jawaban</th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Aksi</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
      {assignments.map((a) => {
        const mine = findMySubmission(a.id);
        return (
          <tr key={a.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
            <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100 font-medium">{a.title}</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{a.subject?.subject_name || "-"}</td>
            <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{a.class?.class_name || "-"}</td>
            <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{a.description || "-"}</td>
            <td className="px-6 py-4 text-gray-700 dark:text-gray-300 text-sm">{mine ? mine.status : "Belum submit"}</td>
            <td className="px-6 py-4">
              {a.attachment_url ? (
                <a
                  href={a.attachment_url}
                  target="_blank"
                  className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-xs"
                >
                  Lihat
                </a>
              ) : (
                <span className="text-gray-400 dark:text-gray-500 text-xs">-</span>
              )}
            </td>
            <td className="px-6 py-4">
              {mine?.file_url ? (
                <a
                  href={mine.file_url}
                  target="_blank"
                  className="px-2 py-1 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors text-xs"
                >
                  Lihat
                </a>
              ) : (
                <span className="text-gray-400 dark:text-gray-500 text-xs">-</span>
              )}
            </td>
            <td className="px-6 py-4">
              {mine?.file_url && (
                <button
                  type="button"
                  onClick={() => removeSubmission(mine.id)}
                  className="px-2 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-xs"
                >
                  Hapus
                </button>
              )}
            </td>
          </tr>
        );
      })}
    </tbody>
  </table>
</div>
      </div>
    </div>
  );
}