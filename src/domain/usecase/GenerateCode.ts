import OTPCode from "../entity/OTPCode";
import OTPRepository from "../respository/OTPRepository";

export default class GenerateCode {
    constructor(readonly otpRepository: OTPRepository) { }

    async execute(userId: string, userPhone: string, dateNow: Date): Promise<OTPCode> {
        const codeByUser = await this.otpRepository.getByUserId(userId)
        if (codeByUser) {
            await this.otpRepository.invalidateCode(codeByUser.id)
        }

        const code = Math.floor(100000 + Math.random() * 900000).toString();
        const otpCode = new OTPCode(userId, userPhone, code, dateNow)

        await this.otpRepository.save(otpCode.userId, otpCode.userPhone, otpCode.otpCode, otpCode.valid, otpCode.expiresAt, otpCode.createdAt)

        return otpCode
    }
}