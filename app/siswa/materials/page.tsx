"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

type Material = {
  id: number;
  title: string;
  description?: string | null;
  file_url?: string | null;
  subject?: { subject_name: string } | null;
  class?: { class_name: string } | null;
};

export default function SiswaMaterialsPage() {
  const [items, setItems] = useState<Material[]>([]);
  const [darkMode, setDarkMode] = useState(false);

  async function load() {
    const res = await fetch("/api/materials");
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
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              Materi Pembelajaran
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Unduh materi sesuai kelas dan mata pelajaran yang kamu ikuti.
            </p>
          </div>
          
        </div>

        {/* Table */}
        {items.length > 0 ? (
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white dark:bg-gray-800">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Judul</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Mata Pelajaran</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Kelas</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Deskripsi</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-200 uppercase tracking-wider">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {items.map((x) => (
                  <tr key={x.id} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-gray-900 dark:text-gray-100 font-medium">{x.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{x.subject?.subject_name || "-"}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">{x.class?.class_name || "-"}</td>
                    <td className="px-6 py-4 text-gray-500 dark:text-gray-400 text-sm">{x.description || "-"}</td>
                    <td className="px-6 py-4">
                      {x.file_url ? (
                        <a
                          href={x.file_url}
                          target="_blank"
                          className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
                        >
                          Unduh
                        </a>
                      ) : (
                        <span className="text-gray-400 dark:text-gray-500 text-sm">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-6">Belum ada materi.</p>
        )}
      </div>
    </div>
  );
}