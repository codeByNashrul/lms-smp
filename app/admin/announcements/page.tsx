"use client";
import { useEffect, useState } from "react";

type ClassItem = { id: number; class_name: string };
type Announcement = {
  id: number;
  scope: string;
  title: string;
  content: string;
  class?: { class_name: string } | null;
  creator?: { full_name: string } | null;
};

export default function AdminAnnouncementsPage() {
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [items, setItems] = useState<Announcement[]>([]);
  const [scope, setScope] = useState("all");
  const [classId, setClassId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const [cRes, aRes] = await Promise.all([
        fetch("/api/classes"),
        fetch("/api/announcements"),
      ]);
      setClasses((await cRes.json()).items || []);
      setItems((await aRes.json()).items || []);
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

    const res = await fetch("/api/announcements", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        scope,
        class_id: scope === "class" ? classId : null,
        title,
        content,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      setMessage(data.message || "Gagal menyimpan pengumuman.");
      return;
    }

    setTitle("");
    setContent("");
    setClassId("");
    setScope("all");
    setMessage("Pengumuman berhasil disimpan.");
    await load();
  }

  return (
    <div className="rounded-2xl min-h-screen p-6 space-y-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
          Kelola Pengumuman
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Buat dan kelola pengumuman untuk semua atau per kelas
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4 transition-colors"
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Scope
            </label>
            <select
              value={scope}
              onChange={(e) => setScope(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            >
              <option value="all">Umum (semua)</option>
              <option value="class">Per kelas</option>
            </select>
          </div>

          {scope === "class" && (
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
                Kelas
              </label>
              <select
                value={classId}
                onChange={(e) => setClassId(e.target.value)}
                className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
              >
                <option value="">-- Pilih kelas --</option>
                {classes.map((x) => (
                  <option key={x.id} value={x.id}>
                    {x.class_name}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          placeholder="Judul pengumuman"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          placeholder="Isi pengumuman"
          rows={4}
        />

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition">
            Simpan
          </button>
          {message && (
            <span className="text-sm text-gray-600 dark:text-gray-300">{message}</span>
          )}
        </div>
      </form>

      {/* Table */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Daftar Pengumuman
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                <th className="py-3 px-4">Judul</th>
                <th className="py-3 px-4">Scope</th>
                <th className="py-3 px-4">Pembuat</th>
                <th className="py-3 px-4">Isi</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-400 dark:text-gray-500">
                    Loading data...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-400 dark:text-gray-500">
                    Belum ada pengumuman
                  </td>
                </tr>
              ) : (
                items.map((x) => (
                  <tr
                    key={x.id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">{x.title}</td>
                    <td className="py-3 px-4">
                      {x.scope === "all" ? (
                        <span className="px-2 py-1 text-xs rounded-md bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-200">
                          Umum
                        </span>
                      ) : (
                        <span className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200">
                          {x.class?.class_name || "-"}
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{x.creator?.full_name || "-"}</td>
                    <td className="py-3 px-4 max-w-xs truncate text-gray-700 dark:text-gray-300">{x.content}</td>
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