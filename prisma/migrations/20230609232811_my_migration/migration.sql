-- CreateTable
CREATE TABLE "user" (
    "id" INTEGER NOT NULL,
    "rut" VARCHAR(25),
    "name" VARCHAR(50) NOT NULL,
    "lastname" VARCHAR(50) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
