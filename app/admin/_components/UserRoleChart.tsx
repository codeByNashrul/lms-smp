"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type ChartItem = {
  name: string;
  total: number;
};

export default function UserRoleChart() {
  const [data, setData] = useState<ChartItem[]>([]);
  const [isDark, setIsDark] = useState(false);

  async function load() {
    const res = await fetch("/api/dashboard/users");
    const json = await res.json();
    setData(json.items || []);
  }

  useEffect(() => {
    load();

    // Detect dark mode
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(darkQuery.matches);

    const listener = (e: MediaQueryListEvent) => setIsDark(e.matches);
    darkQuery.addEventListener("change", listener);
    return () => darkQuery.removeEventListener("change", listener);
  }, []);

  // Warna tema
  const bgColor = isDark ? "#1f2937" : "#fff"; // dark:bg-gray-800
  const textColor = isDark ? "#f9fafb" : "#111827"; // dark:text-gray-50 / text-gray-900
  const gridColor = isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)";
  const barColor = isDark ? "#3B82F6" : "#2563EB";

  return (
    <div
      className={`border rounded-xl p-5 shadow-sm`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="mb-4">
        <h2 className="text-lg font-semibold" style={{ color: textColor }}>
          Grafik Pengguna
        </h2>
        <p className="text-sm" style={{ color: textColor + "99" }}>
          Jumlah pengguna berdasarkan role
        </p>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke={gridColor} vertical={false} />
            <XAxis
              dataKey="name"
              stroke={textColor}
              tick={{ fill: textColor }}
            />
            <YAxis
              allowDecimals={false}
              stroke={textColor}
              tick={{ fill: textColor }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: isDark ? "#111827" : "#fff",
                borderRadius: "8px",
                borderColor: gridColor,
                color: textColor,
              }}
            />
            <Bar dataKey="total" fill={barColor} radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}