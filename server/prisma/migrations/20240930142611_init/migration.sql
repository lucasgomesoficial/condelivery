-- CreateEnum
CREATE TYPE "OrderStatus" AS ENUM ('WaitingForCollaborator', 'OnItsWay', 'Delivered');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('User', 'Collaborator', 'Admin');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT,
    "id_document" TEXT,
    "phone_number" TEXT,
    "id_condominium" TEXT,
    "block" TEXT,
    "apartment" TEXT,
    "role" "Role" NOT NULL DEFAULT 'User',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order" (
    "id" TEXT NOT NULL,
    "receivingCode" INTEGER,
    "status" "OrderStatus" NOT NULL DEFAULT 'WaitingForCollaborator',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_user" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "orderId" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "order_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "order_id_key" ON "order"("id");

-- CreateIndex
CREATE UNIQUE INDEX "order_user_id_key" ON "order_user"("id");

-- CreateIndex
CREATE INDEX "order_user_userId_idx" ON "order_user"("userId");

-- CreateIndex
CREATE INDEX "order_user_orderId_idx" ON "order_user"("orderId");

-- AddForeignKey
ALTER TABLE "order_user" ADD CONSTRAINT "order_user_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_user" ADD CONSTRAINT "order_user_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
