"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2, LogIn } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const next = searchParams.get("next") || "/";

  const [pending, start] = useTransition();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function onSubmit() {
    start(async () => {
      try {
        const res = await fetch("/api/lms/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
          toast.error(data?.message || "Gagal masuk.");
          return;
        }

        // Redirect sesuai role
        const role = data?.role as string | undefined;
        if (role === "admin") router.push("/admin");
        else if (role === "guru") router.push("/guru");
        else if (role === "siswa") router.push("/siswa");
        else router.push(next);
      } catch {
        toast.error("Terjadi kesalahan. Silakan coba lagi.");
      }
    });
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Masuk LMS</CardTitle>
        <CardDescription>
          Silakan masuk menggunakan akun yang diberikan sekolah.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid gap-2">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="contoh: siswa01"
            autoComplete="username"
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            onKeyDown={(e) => {
              if (e.key === "Enter") onSubmit();
            }}
          />
        </div>

        <Button onClick={onSubmit} disabled={pending}>
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              <span>Memproses...</span>
            </>
          ) : (
            <>
              <LogIn className="size-4" />
              <span>Masuk</span>
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}
