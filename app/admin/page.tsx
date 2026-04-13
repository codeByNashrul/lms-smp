"use client";

import { useEffect, useState } from "react";
import UserRoleChart from "./_components/UserRoleChart";

type SummaryData = {
  totalUsers: number;
  totalClasses: number;
  totalSubjects: number;
  totalMaterials: number;
  totalAssignments: number;
  totalAnnouncements: number;
};

export default function AdminDashboard() {
  const [summary, setSummary] = useState<SummaryData>({
    totalUsers: 0,
    totalClasses: 0,
    totalSubjects: 0,
    totalMaterials: 0,
    totalAssignments: 0,
    totalAnnouncements: 0,
  });

  const [loading, setLoading] = useState(true);

  const menus = [
    { title: "Data Pengguna", href: "/admin/users", icon: "👤", color: "bg-blue-600 hover:bg-blue-700" },
    { title: "Kelola Kelas", href: "/admin/classes", icon: "🏫", color: "bg-green-600 hover:bg-green-700" },
    { title: "Kelola Mapel", href: "/admin/subjects", icon: "📚", color: "bg-purple-600 hover:bg-purple-700" },
    { title: "Assign Guru", href: "/admin/teacher-assign", icon: "🧑‍🏫", color: "bg-indigo-600 hover:bg-indigo-700" },
    { title: "Enroll Siswa", href: "/admin/enrollments", icon: "🎓", color: "bg-pink-600 hover:bg-pink-700" },
    { title: "Pengumuman", href: "/admin/announcements", icon: "📢", color: "bg-orange-600 hover:bg-orange-700" },
  ];

  async function loadSummary() {
    try {
      setLoading(true);
      const res = await fetch("/api/dashboard/summary");
      const json = await res.json();
      setSummary(json.data || {});
    } catch (error) {
      console.error("Gagal memuat summary dashboard:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadSummary();
  }, []);

  const stats = [
    { label: "Pengguna", value: summary.totalUsers, icon: "👤" },
    { label: "Kelas", value: summary.totalClasses, icon: "🏫" },
    { label: "Mapel", value: summary.totalSubjects, icon: "📚" },
    { label: "Materi", value: summary.totalMaterials, icon: "📄" },
    { label: "Tugas", value: summary.totalAssignments, icon: "📝" },
    { label: "Pengumuman", value: summary.totalAnnouncements, icon: "📢" },
  ];

  return (
    <div className="rounded-2xl min-h-screen bg-gray-50 dark:bg-gray-900 p-6 space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">Dashboard Admin</h1>
          <p className="text-gray-500 dark:text-gray-400">Kelola sistem LMS secara menyeluruh</p>
        </div>
        
      </div>

      {/* Stats */}
      {loading ? (
        <div className="text-gray-500">Loading dashboard...</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-sm hover:shadow-md transition border flex items-center justify-between"
            >
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                <h2 className="text-2xl font-bold mt-1 text-gray-800 dark:text-white">{item.value}</h2>
              </div>
              <div className="text-3xl">{item.icon}</div>
            </div>
          ))}
        </div>
      )}

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Distribusi Pengguna</h2>
          <span className="text-sm text-gray-400 dark:text-gray-300">Realtime</span>
        </div>
        <UserRoleChart />
      </div>

      {/* Menu */}
      <div>
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Menu Pengelolaan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menus.map((menu, i) => (
            <a
              key={i}
              href={menu.href}
              className={`group ${menu.color} text-white rounded-2xl p-5 shadow-sm hover:shadow-xl hover:scale-[1.02] transition duration-200`}
            >
              <div className="flex items-center justify-between">
                <div className="text-3xl">{menu.icon}</div>
                <div className="text-gray-300 group-hover:text-white transition">→</div>
              </div>
              <div className="mt-4">
                <div className="font-semibold text-lg group-hover:text-white transition">{menu.title}</div>
                <p className="text-sm opacity-80 mt-1">{`Kelola ${menu.title.toLowerCase()}`}</p>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition">Buka menu →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}