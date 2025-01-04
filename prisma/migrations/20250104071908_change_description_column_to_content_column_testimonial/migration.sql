/*
  Warnings:

  - You are about to drop the column `description` on the `testimonials` table. All the data in the column will be lost.
  - Added the required column `content` to the `testimonials` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `description`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;
