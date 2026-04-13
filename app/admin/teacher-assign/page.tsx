"use client";
import { useEffect, useState } from "react";

export default function TeacherAssignPage() {
  const [teachers, setTeachers] = useState<any[]>([]);
  const [classes, setClasses] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [items, setItems] = useState<any[]>([]);

  const [teacher, setTeacher] = useState("");
  const [kelas, setKelas] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);
      const [u, c, s, a] = await Promise.all([
        fetch("/api/users?role=guru"),
        fetch("/api/classes"),
        fetch("/api/subjects"),
        fetch("/api/teacher-assign"),
      ]);
      setTeachers((await u.json()).items || []);
      setClasses((await c.json()).items || []);
      setSubjects((await s.json()).items || []);
      setItems((await a.json()).items || []);
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

    const res = await fetch("/api/teacher-assign", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        teacher_id: teacher,
        class_id: kelas,
        subject_id: subject,
      }),
    });

    const data = await res.json();
    if (!res.ok)
      return setMessage(data.message || "Gagal assign guru.");

    setTeacher("");
    setKelas("");
    setSubject("");
    setMessage("Assignment guru berhasil dibuat.");
    load();
  }

  return (
    <div className="rounded-2xl min-h-screen p-6 space-y-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white tracking-tight">
          Assign Guru
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Hubungkan guru dengan kelas dan mata pelajaran
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4 transition-colors"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <select
            value={teacher}
            onChange={(e) => setTeacher(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          >
            <option value="">Pilih Guru</option>
            {teachers.map((t) => (
              <option key={t.id} value={t.id}>
                {t.full_name}
              </option>
            ))}
          </select>

          <select
            value={kelas}
            onChange={(e) => setKelas(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          >
            <option value="">Pilih Kelas</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.class_name}
              </option>
            ))}
          </select>

          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
          >
            <option value="">Pilih Mapel</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.subject_name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition">
            Simpan Assignment
          </button>
          {message && (
            <span className="text-sm text-gray-600 dark:text-gray-300">{message}</span>
          )}
        </div>
      </form>

      {/* Table */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 transition-colors">
        <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
          Daftar Assignment Guru
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                <th className="py-3 px-4">Guru</th>
                <th className="py-3 px-4">Kelas</th>
                <th className="py-3 px-4">Mapel</th>
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
                    Belum ada assignment
                  </td>
                </tr>
              ) : (
                items.map((x: any) => (
                  <tr
                    key={x.id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="py-3 px-4 font-medium text-gray-900 dark:text-gray-100">
                      {x.teacher?.full_name || "-"}
                    </td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                      {x.class?.class_name || "-"}
                    </td>
                    <td className="py-3 px-4 text-gray-700 dark:text-gray-300">
                      {x.subject?.subject_name || "-"}
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