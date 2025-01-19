/*
  Warnings:

  - The primary key for the `teachers` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `teachers` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `schedule_details` DROP FOREIGN KEY `schedule_details_teacher_id_fkey`;

-- AlterTable
ALTER TABLE `teachers` DROP PRIMARY KEY,
    DROP COLUMN `id`;

-- AddForeignKey
ALTER TABLE `schedule_details` ADD CONSTRAINT `schedule_details_teacher_id_fkey` FOREIGN KEY (`teacher_id`) REFERENCES `teachers`(`user_id`) ON DELETE SET NULL ON UPDATE CASCADE;
