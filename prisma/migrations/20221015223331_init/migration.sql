-- CreateTable
CREATE TABLE "otp_code" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "user_phone" INTEGER NOT NULL,
    "otp_code" INTEGER NOT NULL,
    "valid" BOOLEAN NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME
);
