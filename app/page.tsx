"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "./_components/Navbar";

const features = [
  {
    title: "Materi Pembelajaran",
    description:
      "Materi disusun berdasarkan kelas dan mata pelajaran sehingga siswa dapat belajar dengan lebih terarah.",
    icon: "📚",
  },
  {
    title: "Tugas Terstruktur",
    description:
      "Guru dapat membagikan tugas secara sistematis dan siswa dapat mengumpulkan jawaban melalui LMS.",
    icon: "📝",
  },
  {
    title: "Pengumuman Akademik",
    description:
      "Informasi penting dari guru dan sekolah dapat disampaikan dengan lebih cepat dan terorganisir.",
    icon: "📢",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-20 md:py-28">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm text-muted-foreground bg-background">
                LMS SMP POMOSDA
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                  Learning Management System
                  <span className="block text-primary">SMP POMOSDA</span>
                </h1>

                <p className="max-w-2xl mx-auto text-muted-foreground text-base md:text-xl leading-relaxed">
                  Platform pembelajaran digital untuk mendukung pengelolaan
                  materi, tugas, pengumpulan jawaban, dan penyampaian informasi
                  akademik secara lebih terstruktur.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <Link
                  className={buttonVariants({ size: "lg" })}
                  href="/about"
                >
                  Jelajahi LMS
                </Link>

                <Link
                  className={buttonVariants({
                    size: "lg",
                    variant: "outline",
                  })}
                  href="/login"
                >
                  Masuk
                </Link>
              </div>
            </div>
          </section>

          {/* Feature Section */}
          <section className="pb-20">
            <div className="text-center mb-10 space-y-2">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Fitur Utama LMS
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Dirancang untuk membantu proses pembelajaran di SMP POMOSDA
                menjadi lebih tertata, mudah diakses, dan terdokumentasi.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="border bg-white/80 hover:shadow-md transition-all duration-200 rounded-2xl"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="text-4xl">{feature.icon}</div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}