"use client";

import { useEffect, useState } from "react";

type Material = {
  id: number | string;
  title: string;
  description?: string | null;
  class?: { class_name: string } | null;
  subject?: { subject_name: string } | null;
  file_url?: string | null;
};

type Assignment = {
  id: number | string;
  title: string;
  description?: string | null;
  due_at?: string | null;
  class?: { class_name: string } | null;
  subject?: { subject_name: string } | null;
};

type Submission = {
  id: number | string;
  file_url: string;
  status: string;
  student?: { full_name: string } | null;
  assignment?: { title: string } | null;
};

export default function GuruDashboard() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  async function load() {
    try {
      const [mRes, aRes, sRes] = await Promise.all([
        fetch("/api/materials"),
        fetch("/api/assignments"),
        fetch("/api/submissions"),
      ]);

      const mData = await mRes.json();
      const aData = await aRes.json();
      const sData = await sRes.json();

      setMaterials((mData.items || []).slice(0, 5));
      setAssignments((aData.items || []).slice(0, 5));
      setSubmissions((sData.items || []).slice(0, 5));
    } catch (error) {
      console.error("Gagal memuat dashboard guru:", error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  const quickMenus = [
    { title: "Kelola Materi", href: "/guru/materials", icon: "📚", color: "bg-blue-600 hover:bg-blue-700" },
    { title: "Kelola Tugas", href: "/guru/assignments", icon: "📝", color: "bg-green-600 hover:bg-green-700" },
    { title: "Kelola Pengumuman", href: "/guru/announcements", icon: "📢", color: "bg-purple-600 hover:bg-purple-700" },
    { title: "Perangkat Pembelajaran", href: "/guru/perangkat", icon: "🗂️", color: "bg-indigo-600 hover:bg-indigo-700" },
  ];

  return (
    <div className="rounded-2xl p-6 space-y-8 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard Guru</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Kelola materi, tugas, pengumuman, dan pantau aktivitas siswa.
        </p>
      </div>

      {/* Quick Menu */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {quickMenus.map((menu, index) => (
          <a
            key={index}
            href={menu.href}
            className={`${menu.color} group rounded-2xl p-5 text-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all`}
          >
            <div className="text-3xl mb-3">{menu.icon}</div>
            <div className="font-semibold text-lg">{menu.title}</div>
          </a>
        ))}
      </div>

      {/* Sections */}
      {[
        {
          title: "Materi Terbaru",
          link: "/guru/materials",
          data: materials,
          empty: "Belum ada materi.",
          btnColor: "bg-blue-600 hover:bg-blue-700",
          render: (item: Material) => (
            <>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-500">{item.class?.class_name || "-"} • {item.subject?.subject_name || "-"}</div>
              <div className="text-sm text-gray-400 mt-1">{item.description || "-"}</div>
              {item.file_url && (
                <a
                  href={item.file_url}
                  target="_blank"
                  className={`px-3 py-1 mt-2 inline-block text-white rounded-lg ${"bg-blue-600 hover:bg-blue-700"} text-sm transition`}
                >
                  Buka materi
                </a>
              )}
            </>
          ),
        },
        {
          title: "Tugas Terbaru",
          link: "/guru/assignments",
          data: assignments,
          empty: "Belum ada tugas.",
          btnColor: "bg-green-600 hover:bg-green-700",
          render: (item: Assignment) => (
            <>
              <div className="font-medium">{item.title}</div>
              <div className="text-sm text-gray-500">{item.class?.class_name || "-"} • {item.subject?.subject_name || "-"}</div>
              <div className="text-sm text-gray-400 mt-1">{item.description || "-"}</div>
              <div className="text-sm text-gray-400 mt-1">
                Deadline: {item.due_at ? new Date(item.due_at).toLocaleString("id-ID") : "-"}
              </div>
            </>
          ),
        },
        {
          title: "Submission Terbaru",
          link: "/guru/submissions",
          data: submissions,
          empty: "Belum ada submission.",
          btnColor: "bg-blue-600 hover:bg-blue-700",
          render: (item: Submission) => (
            <>
              <div className="font-medium">{item.assignment?.title || "Tugas"}</div>
              <div className="text-sm text-gray-500">Siswa: {item.student?.full_name || "-"}</div>
              <div className="text-sm text-gray-400 mt-1">Status: {item.status || "-"}</div>
              <a
                href={item.file_url}
                target="_blank"
                className={`px-3 py-1 mt-2 inline-block text-white rounded-lg ${"bg-blue-600 hover:bg-blue-700"} text-sm transition`}
              >
                Lihat jawaban
              </a>
            </>
          ),
        },
      ].map((section, idx) => (
        <div
          key={idx}
          className="rounded-2xl p-5 bg-white/70 dark:bg-gray-800/70 backdrop-blur border border-gray-200 dark:border-gray-700 shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{section.title}</h2>
            <a
              href={section.link}
              className={`px-3 py-1 text-white rounded-lg ${section.btnColor} text-sm transition`}
            >
              Lihat semua
            </a>
          </div>

          <div className="space-y-3">
            {section.data.length > 0 ? (
              section.data.map((item: any) => (
                <div
                  key={item.id}
                  className="rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:shadow-md transition bg-white dark:bg-gray-900"
                >
                  {section.render(item)}
                </div>
              ))
            ) : (
              <p className="text-sm text-gray-400">{section.empty}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}