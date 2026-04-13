"use client";

import { useEffect, useState } from "react";

type TeacherAssignment = {
  id: number;
  class_id: number;
  class: { class_name: string };
  subject: { subject_name: string };
};

type Announcement = {
  id: number;
  scope: string;
  title: string;
  content: string;
  class?: { class_name: string } | null;
  creator?: { full_name: string } | null;
};

export default function GuruAnnouncementsPage() {
  const [assignments, setAssignments] = useState<TeacherAssignment[]>([]);
  const [items, setItems] = useState<Announcement[]>([]);
  const [scope, setScope] = useState("all");
  const [classId, setClassId] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");

  async function load() {
    const [taRes, aRes] = await Promise.all([
      fetch("/api/guru/assignments"),
      fetch("/api/announcements"),
    ]);
    setAssignments((await taRes.json()).items || []);
    setItems((await aRes.json()).items || []);
  }

  useEffect(() => {
    load();
  }, []);

  const uniqueClasses = Array.from(
    new Map(
      assignments.map((x) => [
        x.class_id,
        { id: x.class_id, class_name: x.class.class_name },
      ])
    ).values()
  );

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const res = await fetch("/api/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
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
    <div className="rounded-2xl p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          Pengumuman Guru
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Buat pengumuman umum atau khusus untuk kelas tertentu.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="space-y-4 rounded-2xl p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm"
      >
        <select
          value={scope}
          onChange={(e) => setScope(e.target.value)}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
        >
          <option value="all">Umum (Semua)</option>
          <option value="class">Per Kelas</option>
        </select>

        {scope === "class" && (
          <select
            value={classId}
            onChange={(e) => setClassId(e.target.value)}
            className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          >
            <option value="">-- Pilih kelas --</option>
            {uniqueClasses.map((x) => (
              <option key={x.id} value={x.id}>
                {x.class_name}
              </option>
            ))}
          </select>
        )}

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Judul pengumuman"
        />

        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full rounded-xl border px-3 py-2 bg-white dark:bg-gray-900 dark:border-gray-700"
          placeholder="Isi pengumuman"
        />

        <button className="bg-green-600 hover:bg-green-700 transition text-white px-5 py-2 rounded-xl shadow">
          Simpan Pengumuman
        </button>

        {message && (
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {message}
          </p>
        )}
      </form>

      {/* Table */}
      <div className="rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">

        <div className="p-5 border-b dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
            Daftar Pengumuman
          </h2>
        </div>

        {items.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">

              <thead className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
                <tr>
                  <th className="text-left px-4 py-3">Judul</th>
                  <th className="text-left px-4 py-3">Scope</th>
                  <th className="text-left px-4 py-3">Pembuat</th>
                  <th className="text-left px-4 py-3">Isi</th>
                </tr>
              </thead>

              <tbody>
                {items.map((x) => (
                  <tr
                    key={x.id}
                    className="border-t dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                  >
                    <td className="px-4 py-3 font-medium">{x.title}</td>

                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          x.scope === "all"
                            ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300"
                            : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300"
                        }`}
                      >
                        {x.scope === "all"
                          ? "Umum"
                          : `Kelas ${x.class?.class_name || "-"}`}
                      </span>
                    </td>

                    <td className="px-4 py-3">
                      {x.creator?.full_name || "-"}
                    </td>

                    <td className="px-4 py-3 text-gray-500">
                      {x.content}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        ) : (
          <p className="p-5 text-sm text-gray-400">
            Belum ada pengumuman.
          </p>
        )}
      </div>
    </div>
  );
}