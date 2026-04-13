"use client";

import { useEffect, useState } from "react";

type SubmissionItem = {
  id: number;
  status: string;
  file_url?: string | null;
  student?: { full_name: string } | null;
  assignment?: {
    title: string;
    class?: { class_name: string } | null;
    subject?: { subject_name: string } | null;
  } | null;
};

export default function GuruSubmissionsPage() {
  const [items, setItems] = useState<SubmissionItem[]>([]);

  async function load() {
    const res = await fetch("/api/submissions");
    const data = await res.json();
    setItems(data.items || []);
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="p-6 space-y-6 min-h-screen bg-gray-50 dark:bg-gray-900 rounded-2xl">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Daftar Submission</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Guru dapat melihat file jawaban yang dikirim siswa.
        </p>
      </div>

      {/* Tabel */}
      {items.length > 0 ? (
        <div className="overflow-x-auto rounded-xl shadow border dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-700 dark:text-white">Judul Tugas</th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-700 dark:text-white">Mata Pelajaran</th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-700 dark:text-white">Kelas</th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-700 dark:text-white">Siswa</th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-700 dark:text-white">Status</th>
                <th className="px-6 py-3 text-left text-md font-medium text-gray-700 dark:text-white">File Jawaban</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {items.map((x) => (
                <tr key={x.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">{x.assignment?.title || "-"}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{x.assignment?.subject?.subject_name || "-"}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{x.assignment?.class?.class_name || "-"}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">{x.student?.full_name || "-"}</td>
                  <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">{x.status}</td>
                  <td className="px-6 py-4 text-sm">
                    {x.file_url ? (
                      <a
                        href={x.file_url}
                        target="_blank"
                        className="text-blue-600 dark:text-blue-400 underline"
                      >
                        Lihat
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-sm text-gray-500 dark:text-gray-400">Belum ada submission.</p>
      )}
    </div>
  );
}