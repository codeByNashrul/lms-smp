import bcrypt from "bcryptjs";
import { PrismaClient } from "../lib/generated/prisma";

const prisma = new PrismaClient();

async function main() {
  const [adminRole, guruRole, siswaRole] = await Promise.all([
    prisma.role.upsert({
      where: { name: "admin" },
      update: {},
      create: { name: "admin", description: "Administrator" },
    }),
    prisma.role.upsert({
      where: { name: "guru" },
      update: {},
      create: { name: "guru", description: "Guru" },
    }),
    prisma.role.upsert({
      where: { name: "siswa" },
      update: {},
      create: { name: "siswa", description: "Siswa" },
    }),
  ]);

  const defaultPass = await bcrypt.hash("Pomosda123!", 10);

  const admin = await prisma.user.upsert({
    where: { username: "admin" },
    update: {},
    create: {
      full_name: "Admin Pomosda",
      username: "admin",
      email: "admin@pomosda.local",
      password_hash: defaultPass,
    },
  });

  const guru = await prisma.user.upsert({
    where: { username: "guru01" },
    update: {},
    create: {
      full_name: "Guru 01",
      username: "guru01",
      email: "guru01@pomosda.local",
      password_hash: defaultPass,
    },
  });

  const siswa = await prisma.user.upsert({
    where: { username: "siswa01" },
    update: {},
    create: {
      full_name: "Siswa 01",
      username: "siswa01",
      email: "siswa01@pomosda.local",
      password_hash: defaultPass,
    },
  });

  await prisma.userRole.upsert({
    where: { user_id_role_id: { user_id: admin.id, role_id: adminRole.id } },
    update: {},
    create: { user_id: admin.id, role_id: adminRole.id },
  });

  await prisma.userRole.upsert({
    where: { user_id_role_id: { user_id: guru.id, role_id: guruRole.id } },
    update: {},
    create: { user_id: guru.id, role_id: guruRole.id },
  });

  await prisma.userRole.upsert({
    where: { user_id_role_id: { user_id: siswa.id, role_id: siswaRole.id } },
    update: {},
    create: { user_id: siswa.id, role_id: siswaRole.id },
  });

  // Sample class + subject + enrollment
  const kelas = await prisma.class.upsert({
    where: { id: 1 },
    update: {},
    create: { class_name: "VII-A", grade_level: "7" },
  });
  const mapel = await prisma.subject.upsert({
    where: { id: 1 },
    update: {},
    create: { subject_name: "Matematika", code: "MTK" },
  });

  await prisma.teacherAssign.upsert({
    where: { id: 1 },
    update: {},
    create: { teacher_id: guru.id, class_id: kelas.id, subject_id: mapel.id },
  });

  await prisma.enrollment.upsert({
    where: { id: 1 },
    update: {},
    create: { student_id: siswa.id, class_id: kelas.id },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
