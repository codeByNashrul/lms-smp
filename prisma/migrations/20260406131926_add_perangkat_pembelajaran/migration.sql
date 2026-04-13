-- CreateTable
CREATE TABLE "perangkat_pembelajaran" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "subject_id" INTEGER NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "file_url" TEXT,
    "type" TEXT NOT NULL DEFAULT 'modul',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "perangkat_pembelajaran_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "perangkat_pembelajaran" ADD CONSTRAINT "perangkat_pembelajaran_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perangkat_pembelajaran" ADD CONSTRAINT "perangkat_pembelajaran_subject_id_fkey" FOREIGN KEY ("subject_id") REFERENCES "subjects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "perangkat_pembelajaran" ADD CONSTRAINT "perangkat_pembelajaran_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
