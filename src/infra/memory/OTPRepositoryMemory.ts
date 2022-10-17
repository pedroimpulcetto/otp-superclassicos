import OTPRepository from "../../domain/respository/OTPRepository";
import OTPCodeDTO from "../../dto/in/OTPCodeDTO";

export default class OTPRepositoryMemory implements OTPRepository {
    codes: OTPCodeDTO[]
    constructor() {
        this.codes = [
            new OTPCodeDTO('1', '1', "19998305135", "111111", true, new Date('2022-10-15T22:00:00'), new Date('2022-10-15T21:45:00'), null)
        ]

    }

    async invalidateCode(codeId: string): Promise<void> {
        return
    }

    async save(userId: string, userPhone: string, otpCode: string, valid: boolean, expiresAt: Date, createdAt: Date): Promise<void> {
        const newCode = new OTPCodeDTO(
            "2",
            userId,
            userPhone,
            otpCode,
            valid,
            expiresAt,
            createdAt
        )
        this.codes.push(newCode)
    }


    async getByUserId(userId: string): Promise<OTPCodeDTO | undefined> {
        return this.codes.find(c => c.user_id === userId)
    }

}