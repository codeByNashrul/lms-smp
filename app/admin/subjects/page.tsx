"use client";

import { useEffect, useState } from "react";

type SubjectRow = { id: number; subject_name: string; code: string | null };

export default function AdminSubjectsPage() {
  const [items, setItems] = useState<SubjectRow[]>([]);
  const [subjectName, setSubjectName] = useState("");
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const res = await fetch("/api/subjects");
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

    const res = await fetch("/api/subjects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject_name: subjectName, code }),
    });

    const data = await res.json();
    if (!res.ok) return setMessage(data.message || "Gagal menambah mapel.");

    setSubjectName("");
    setCode("");
    setMessage("Mapel berhasil ditambahkan.");
    load();
  }

  return (
    <div className="rounded-2xl min-h-screen p-6 space-y-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
          Kelola Mata Pelajaran
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Manajemen data mapel secara terpusat
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4 transition-colors"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            value={subjectName}
            onChange={(e) => setSubjectName(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Nama mata pelajaran"
          />
          <input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Kode mapel"
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
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Daftar Mata Pelajaran
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                <th className="py-3 px-4">Nama Mapel</th>
                <th className="py-3 px-4">Kode</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={2} className="text-center py-6 text-gray-400 dark:text-gray-500">
                    Loading data...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={2} className="text-center py-6 text-gray-400 dark:text-gray-500">
                    Belum ada data mapel
                  </td>
                </tr>
              ) : (
                items.map((x) => (
                  <tr
                    key={x.id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">
                      {x.subject_name}
                    </td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                      {x.code ? (
                        <span className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 transition-colors">
                          {x.code}
                        </span>
                      ) : (
                        "-"
                      )}
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