"use client";

import { useEffect, useState } from "react";

type Announcement = {
  id: number | string;
  title: string;
  content: string;
  scope?: string;
  class?: { class_name: string } | null;
};

type Material = {
  id: number | string;
  title: string;
  description?: string | null;
  file_url?: string | null;
  subject?: { subject_name: string } | null;
  class?: { class_name: string } | null;
};

type Assignment = {
  id: number | string;
  title: string;
  description?: string | null;
  due_at?: string | null;
  attachment_url?: string | null;
  subject?: { subject_name: string } | null;
  class?: { class_name: string } | null;
};

export default function SiswaDashboard() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  async function load() {
    try {
      const [aRes, mRes, tRes] = await Promise.all([
        fetch("/api/announcements"),
        fetch("/api/materials"),
        fetch("/api/assignments"),
      ]);

      const aData = await aRes.json();
      const mData = await mRes.json();
      const tData = await tRes.json();

      setAnnouncements((aData.items || []).slice(0, 5));
      setMaterials((mData.items || []).slice(0, 5));
      setAssignments((tData.items || []).slice(0, 5));
    } catch (error) {
      console.error("Gagal memuat dashboard siswa:", error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="rounded-2xl min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col p-6 space-y-8">
      {/* HEADER */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Dashboard Siswa
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Ringkasan pengumuman, materi, dan tugas terbaru.
        </p>
      </div>

      {/* QUICK MENU */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          {
            title: "Materi",
            href: "/siswa/materials",
            icon: "📚",
            desc: "Lihat semua materi pembelajaran",
            color: "bg-blue-600 hover:bg-blue-700",
          },
          {
            title: "Tugas",
            href: "/siswa/assignments",
            icon: "📝",
            desc: "Lihat tugas yang diberikan guru",
            color: "bg-green-600 hover:bg-green-700",
          },
          {
            title: "Pengumuman",
            href: "/siswa/announcements",
            icon: "📢",
            desc: "Baca informasi terbaru dari sekolah",
            color: "bg-purple-600 hover:bg-purple-700",
          },
        ].map((item) => (
          <a
            key={item.title}
            href={item.href}
            className="group relative overflow-hidden rounded-2xl p-5 
            bg-white/70 dark:bg-white/5 backdrop-blur 
            border border-white/10 
            hover:shadow-xl transition"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 
            bg-gradient-to-r from-blue-500/10 to-indigo-500/10 transition" />

            <div className="relative z-10">
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-lg font-semibold">{item.title}</div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{item.desc}</p>
            </div>
          </a>
        ))}
      </div>

      {/* PENGUMUMAN */}
      <div className="rounded-2xl p-5 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/10 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Pengumuman Terbaru</h2>
          <a
            href="/siswa/announcements"
            className="px-3 py-1 text-white rounded-lg bg-purple-600 hover:bg-purple-700 text-sm transition"
          >
            Lihat semua
          </a>
        </div>

        {announcements.length > 0 ? (
          announcements.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition border border-transparent hover:border-purple-500/20">
              <div className="font-medium text-gray-900 dark:text-gray-100">{item.title}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{item.content}</div>
              <div className="text-xs text-purple-500 mt-2">
                {item.scope === "all" ? "Umum" : `Kelas ${item.class?.class_name || "-"}`}
              </div>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">Belum ada pengumuman.</p>
        )}
      </div>

      {/* MATERI */}
      <div className="rounded-2xl p-5 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/10 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Materi</h2>
          <a
            href="/siswa/materials"
            className="px-3 py-1 text-white rounded-lg bg-blue-600 hover:bg-blue-700 text-sm transition"
          >
            Lihat semua
          </a>
        </div>

        {materials.length > 0 ? (
          materials.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition border border-transparent hover:border-blue-500/20">
              <div className="font-medium text-gray-900 dark:text-gray-100">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">{item.subject?.subject_name || "-"} • {item.class?.class_name || "-"}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{item.description || "-"}</div>

              {item.file_url && (
                <a
                  href={item.file_url}
                  target="_blank"
                  className="px-3 py-1 mt-2 inline-block text-white rounded-lg bg-blue-600 hover:bg-blue-700 text-sm transition"
                >
                  Buka materi →
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">Belum ada materi.</p>
        )}
      </div>

      {/* TUGAS */}
      <div className="rounded-2xl p-5 bg-white/70 dark:bg-white/5 backdrop-blur border border-white/10 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Tugas</h2>
          <a
            href="/siswa/assignments"
            className="px-3 py-1 text-white rounded-lg bg-green-600 hover:bg-green-700 text-sm transition"
          >
            Lihat semua
          </a>
        </div>

        {assignments.length > 0 ? (
          assignments.map((item) => (
            <div key={item.id} className="p-4 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition border border-transparent hover:border-green-500/20">
              <div className="font-medium text-gray-900 dark:text-gray-100">{item.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-300 mt-1">{item.subject?.subject_name || "-"} • {item.class?.class_name || "-"}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">{item.description || "-"}</div>
              <div className="text-xs text-green-500 mt-2">
                Deadline: {item.due_at ? new Date(item.due_at).toLocaleDateString("id-ID") : "-"}
              </div>

              {item.attachment_url && (
                <a
                  href={item.attachment_url}
                  target="_blank"
                  className="px-3 py-1 mt-2 inline-block text-white rounded-lg bg-green-600 hover:bg-green-700 text-sm transition"
                >
                  Lihat lampiran →
                </a>
              )}
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 dark:text-gray-400">Belum ada tugas.</p>
        )}
      </div>
    </div>
  );
}