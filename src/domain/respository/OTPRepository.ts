import OTPCodeDTO from "../../dto/in/OTPCodeDTO"

export default interface OTPRepository {
    save(userId: string, userPhone: string, otpCode: string, valid: boolean, expiresAt: Date, createdAt: Date): Promise<void>
    getByUserId(userId: string): Promise<OTPCodeDTO | undefined>
    invalidateCode(codeId: string): Promise<void>
} 