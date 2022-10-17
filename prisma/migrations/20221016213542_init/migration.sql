-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_otp_code" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,
    "otp_code" TEXT NOT NULL,
    "valid" BOOLEAN NOT NULL,
    "expires_at" DATETIME NOT NULL,
    "created_at" DATETIME NOT NULL,
    "updated_at" DATETIME
);
INSERT INTO "new_otp_code" ("created_at", "expires_at", "id", "otp_code", "updated_at", "user_id", "user_phone", "valid") SELECT "created_at", "expires_at", "id", "otp_code", "updated_at", "user_id", "user_phone", "valid" FROM "otp_code";
DROP TABLE "otp_code";
ALTER TABLE "new_otp_code" RENAME TO "otp_code";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
