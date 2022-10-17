import { PrismaClient } from "@prisma/client";
import OTPRepository from "../../domain/respository/OTPRepository";
import OTPCodeDTO from "../../dto/in/OTPCodeDTO";

export default class OTPRepositoryDatabase implements OTPRepository {
    constructor(readonly databaseConnection: PrismaClient) { }

    async save(userId: string, userPhone: string, otpCode: string, valid: boolean, expiresAt: Date, createdAt: Date): Promise<void> {
        await this.databaseConnection.otp_code.create({
            data: {
                user_id: userId,
                user_phone: userPhone,
                otp_code: otpCode,
                valid: valid,
                expires_at: expiresAt,
                created_at: createdAt
            }
        })
    }

    async getByUserId(userId: string): Promise<OTPCodeDTO | undefined> {
        const optCode = await this.databaseConnection.otp_code.findFirst({
            where: {
                user_id: userId,
                valid: true
            },
            orderBy: {
                created_at: 'desc'
            }
        })
        if (!optCode) return
        return optCode
    }

    async invalidateCode(codeId: string): Promise<void> {
        await this.databaseConnection.otp_code.update({
            data: {
                valid: false,
                updated_at: new Date()
            },
            where: {
                id: codeId
            }
        })
    }
}