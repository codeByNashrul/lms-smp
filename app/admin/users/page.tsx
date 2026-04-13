"use client";
import { useEffect, useState } from "react";

type UserItem = {
  id: number;
  full_name: string;
  username: string;
  email: string;
  roles?: {
    role?: {
      name: string;
    };
  }[];
};

const initialForm = {
  id: 0,
  full_name: "",
  username: "",
  email: "",
  password: "",
  role: "siswa",
};

export default function AdminUsersPage() {
  const [items, setItems] = useState<UserItem[]>([]);
  const [roleFilter, setRoleFilter] = useState("");
  const [form, setForm] = useState(initialForm);
  const [isEdit, setIsEdit] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function load(selectedRole = "") {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/users${selectedRole ? `?role=${selectedRole}` : ""}`
      );
      const data = await res.json();
      setItems(data.items || []);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function onRoleChange(value: string) {
    setRoleFilter(value);
    await load(value);
  }

  function resetForm() {
    setForm(initialForm);
    setIsEdit(false);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setMessage("");

    const method = isEdit ? "PATCH" : "POST";

    const payload = isEdit
      ? form
      : {
          full_name: form.full_name,
          username: form.username,
          email: form.email,
          password: form.password,
          role: form.role,
        };

    const res = await fetch("/api/users", {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Terjadi kesalahan.");
      return;
    }

    setMessage(
      isEdit ? "User berhasil diperbarui." : "User berhasil ditambahkan."
    );
    resetForm();
    await load(roleFilter);
  }

  function startEdit(user: UserItem) {
    setForm({
      id: user.id,
      full_name: user.full_name,
      username: user.username,
      email: user.email,
      password: "",
      role: user.roles?.[0]?.role?.name || "siswa",
    });
    setIsEdit(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function removeUser(id: number) {
    const ok = confirm("Yakin ingin menghapus user ini?");
    if (!ok) return;

    const res = await fetch(`/api/users?id=${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (!res.ok) {
      setMessage(data.message || "Gagal menghapus user.");
      return;
    }

    setMessage("User berhasil dihapus.");
    await load(roleFilter);
  }

  return (
    <div className="rounded-2xl min-h-screen p-6 space-y-8 bg-gray-50 dark:bg-gray-900 transition-colors">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
          Manajemen Pengguna
        </h1>
        <p className="text-gray-500 dark:text-gray-400">
          Kelola data admin, guru, dan siswa
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={submit}
        className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 space-y-4 transition-colors"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-lg text-gray-800 dark:text-white">
            {isEdit ? "Edit Pengguna" : "Tambah Pengguna"}
          </h2>
          {isEdit && (
            <button
              type="button"
              onClick={resetForm}
              className="text-sm text-gray-500 dark:text-gray-300 underline"
            >
              Batal
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Nama lengkap"
            value={form.full_name}
            onChange={(e) =>
              setForm({ ...form, full_name: e.target.value })
            }
          />
          <input
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
          <input
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <select
            className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
          >
            <option value="admin">Admin</option>
            <option value="guru">Guru</option>
            <option value="siswa">Siswa</option>
          </select>
          <input
            type="password"
            className="border rounded-lg px-3 py-2 md:col-span-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 transition-colors"
            placeholder={isEdit ? "Password baru (opsional)" : "Password"}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow-sm transition">
            {isEdit ? "Simpan" : "Tambah"}
          </button>
          {message && (
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {message}
            </span>
          )}
        </div>
      </form>

      {/* Filter */}
      <div className="max-w-xs">
        <select
          value={roleFilter}
          onChange={(e) => onRoleChange(e.target.value)}
          className="border rounded-lg px-3 py-2 w-full bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          <option value="">Semua role</option>
          <option value="admin">Admin</option>
          <option value="guru">Guru</option>
          <option value="siswa">Siswa</option>
        </select>
      </div>

      {/* Table */}
      <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-gray-300 border-b">
                <th className="px-4 py-3">Nama</th>
                <th className="px-4 py-3">Username</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-6 text-gray-400 dark:text-gray-500"
                  >
                    Loading...
                  </td>
                </tr>
              ) : items.length === 0 ? (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-6 text-gray-400 dark:text-gray-500"
                  >
                    Belum ada data
                  </td>
                </tr>
              ) : (
                items.map((x) => (
                  <tr
                    key={x.id}
                    className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                  >
                    <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">
                      {x.full_name}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      @{x.username}
                    </td>
                    <td className="px-4 py-3 text-gray-700 dark:text-gray-300">
                      {x.email}
                    </td>
                    <td className="px-4 py-3">
                      <span className="px-2 py-1 text-xs rounded-md bg-blue-100 dark:bg-blue-800 text-blue-700 dark:text-blue-200 capitalize">
                        {x.roles?.[0]?.role?.name || "-"}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        <button
                          onClick={() => startEdit(x)}
                          className="px-3 py-1 rounded-lg border hover:bg-gray-50 dark:hover:bg-gray-700 transition"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => removeUser(x.id)}
                          className="px-3 py-1 rounded-lg border text-red-600 hover:bg-red-50 dark:hover:bg-red-700 transition"
                        >
                          Hapus
                        </button>
                      </div>
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