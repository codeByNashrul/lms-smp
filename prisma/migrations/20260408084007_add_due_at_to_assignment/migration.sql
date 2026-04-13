-- DropForeignKey
ALTER TABLE "assignment" DROP CONSTRAINT "assignment_class_id_fkey";

-- DropForeignKey
ALTER TABLE "assignment" DROP CONSTRAINT "assignment_subject_id_fkey";

-- DropForeignKey
ALTER TABLE "assignment" DROP CONSTRAINT "assignment_teacher_id_fkey";

-- DropIndex
DROP INDEX "assignment_class_id_idx";

-- DropIndex
DROP INDEX "assignment_subject_id_idx";

-- DropIndex
DROP INDEX "assignment_teacher_id_idx";

-- AlterTable
ALTER TABLE "assignment" ADD COLUMN     "due_at" TIMESTAMP(3),
ALTER COLUMN "title" SET DATA TYPE TEXT,
ALTER COLUMN "attachment_url" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "assignment" ADD CONSTRAINT "assignment_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignment" ADD CONSTRAINT "assignment_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assignment" ADD CONSTRAINT "assignment_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
