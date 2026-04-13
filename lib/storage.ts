import path from "path";
import { supabaseAdmin } from "@/lib/supabase-admin";

// ✅ UPLOAD
export async function uploadToLmsStorage(params: {
  folder: "materi" | "perangkat" | "tugas" | "submission";
  file: File;
  classId?: number | string;
  subjectId?: number | string;
  userId?: number | string;
}) {
  const { folder, file, classId, subjectId, userId } = params;

  const ext = path.extname(file.name);
  const base = path.basename(file.name, ext).replace(/\s+/g, "-");
  const fileName = `${Date.now()}-${base}${ext}`;

  const filePath = [
    folder,
    classId ? `class-${classId}` : null,
    subjectId ? `subject-${subjectId}` : null,
    userId ? `user-${userId}` : null,
    fileName,
  ]
    .filter(Boolean)
    .join("/");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const { data, error } = await supabaseAdmin.storage
    .from("lms")
    .upload(filePath, buffer, {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

  if (error) {
    throw new Error(error.message);
  }

  return {
    path: data.path,
    fileName,
    size: file.size,
    contentType: file.type || "application/octet-stream",
  };
}

// ✅ SIGNED URL (PRIVATE FILE ACCESS)
export async function createSignedLmsUrl(filePath: string, expiresIn = 600) {
  if (!filePath) return null;

  const cleanPath = filePath
    .replace(/^\/+/, "")
    .replace(/^uploads\//, "")
    .replace(/^lms\//, "");

  const { data, error } = await supabaseAdmin.storage
    .from("lms")
    .createSignedUrl(cleanPath, expiresIn);

  if (error) {
    console.error("SIGNED URL ERROR:", cleanPath, error.message);
    return null;
  }

  return data.signedUrl;
}

// ✅ DELETE (INI YANG KURANG)
export async function deleteFromLmsStorage(filePath: string) {
  if (!filePath) return false;

  const cleanPath = filePath
    .replace(/^\/+/, "")
    .replace(/^uploads\//, "")
    .replace(/^lms\//, "");

  const { error } = await supabaseAdmin.storage
    .from("lms")
    .remove([cleanPath]);

  if (error) {
    console.error("DELETE ERROR:", cleanPath, error.message);
    throw new Error(error.message);
  }

  return true;
}