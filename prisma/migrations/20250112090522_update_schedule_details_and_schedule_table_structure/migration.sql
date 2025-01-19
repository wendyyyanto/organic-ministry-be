/*
  Warnings:

  - You are about to drop the column `date` on the `schedules` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedule_details` ADD COLUMN `zoom_link` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `schedules` DROP COLUMN `date`;
