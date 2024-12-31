/*
  Warnings:

  - You are about to drop the column `createdAt` on the `librarians` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `librarians` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `testimonials` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `librarians` table without a default value. This is not possible if the table is not empty.
  - Added the required column `created_by` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `testimonials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `testimonials` DROP FOREIGN KEY `testimonials_createdBy_fkey`;

-- DropIndex
DROP INDEX `testimonials_createdBy_fkey` ON `testimonials`;

-- AlterTable
ALTER TABLE `librarians` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `testimonials` DROP COLUMN `createdBy`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_by` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AddForeignKey
ALTER TABLE `testimonials` ADD CONSTRAINT `testimonials_created_by_fkey` FOREIGN KEY (`created_by`) REFERENCES `librarians`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
