"use client";

import { useEffect, useState } from "react";

type ClassRow = { id: number; class_name: string; grade_level: string | null };

export default function AdminClassesPage() {
  const [items, setItems] = useState<ClassRow[]>([]);
  const [className, setClassName] = useState("");
  const [gradeLevel, setGradeLevel] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const res = await fetch("/api/classes");
      const data = await res.json();
      setItems(data.items || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/classes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ class_name: className, grade_level: gradeLevel }),
    });

    const data = await res.json();
    if (!res.ok) return setMessage(data.message || "Gagal menambah kelas.");

    setClassName("");
    setGradeLevel("");
    setMessage("Kelas berhasil ditambahkan.");
    load();
  }

  async function remove(id: number) {
    const res = await fetch(`/api/classes/${id}`, { method: "DELETE" });
    const data = await res.json();
    if (!res.ok) return setMessage(data.message || "Gagal menghapus kelas.");

    setMessage("Kelas berhasil dihapus.");
    load();
  }

  return (
    <div className="rounded-2xl min-h-screen p-6 space-y-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
          Kelola Kelas
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manajemen data kelas secara terpusat
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4 transition-colors"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={className}
            onChange={(e) => setClassName(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Nama kelas"
          />
          <input
            value={gradeLevel}
            onChange={(e) => setGradeLevel(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Tingkat / grade"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition">
            Simpan
          </button>
          {message && <span className="text-sm text-gray-600 dark:text-gray-300">{message}</span>}
        </div>
      </form>

      {/* Table */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Daftar Kelas</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                <th className="py-3 px-4">Nama Kelas</th>
                <th className="py-3 px-4">Grade</th>
                <th className="py-3 px-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-400 dark:text-gray-500">
                    Loading data...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={3} className="text-center py-6 text-gray-400 dark:text-gray-500">
                    Belum ada data kelas
                  </td>
                </tr>
              ) : (
                items.map((x) => (
                  <tr
                    key={x.id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">{x.class_name}</td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{x.grade_level || "-"}</td>
                    <td className="py-3 px-4 text-right">
                      <button
                        onClick={() => remove(x.id)}
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-sm transition"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}