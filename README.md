# LMS SMP POMOSDA

Project ini merupakan implementasi Learning Management System (LMS) berbasis web menggunakan Next.js dan Prisma untuk mendukung pembelajaran di SMP POMOSDA.

## Fitur Utama
- Login berbasis role: admin, guru, siswa
- Kelola kelas
- Kelola mata pelajaran
- Assign guru ke kelas dan mapel
- Enrollment siswa ke kelas
- Kelola materi pembelajaran
- Kelola tugas
- Pengumpulan tugas dalam bentuk link
- Pengumuman umum dan per kelas

## Menjalankan Project
1. Copy `.env.example` menjadi `.env`
2. Isi `DATABASE_URL` dan `LMS_JWT_SECRET`
3. Jalankan:
   - `npm install`
   - `npx prisma generate`
   - `npx prisma migrate dev`
   - `npm run dev`

## Catatan
Versi ini disesuaikan dengan kebutuhan skripsi: fokus pada pengelolaan materi, tugas, pengumpulan tugas, dan pengumuman. Penilaian dilakukan langsung oleh guru di luar sistem.
# lms-smp
