"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Announcement = {
  id: number;
  scope: string;
  title: string;
  content: string;
  class?: { class_name: string } | null;
  creator?: { full_name: string } | null;
};

export default function SiswaAnnouncementsPage() {
  const [items, setItems] = useState<Announcement[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  async function load() {
    const res = await fetch("/api/announcements");
    const data = await res.json();
    setItems(data.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="rounded-2xl min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors flex flex-col p-6 space-y-8">
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Pengumuman</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Informasi umum dan pengumuman kelas untuk siswa.
            </p>
          </div>
         
        </div>

        {/* Announcement Cards */}
        <div className="space-y-4">
          {items.length > 0 ? (
            items.map((x) => (
              <div
                key={x.id}
                className="border rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="font-bold text-lg  text-gray-900 dark:text-gray-100">{x.title}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                      Scope: {x.scope === "all" ? "Umum" : `Kelas ${x.class?.class_name || "-"}`}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Pembuat: {x.creator?.full_name || "-"}</div>
                  </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-3">{x.content}</div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500 dark:text-gray-400">Belum ada pengumuman.</p>
          )}
        </div>
      </div>
    </div>
  );
}