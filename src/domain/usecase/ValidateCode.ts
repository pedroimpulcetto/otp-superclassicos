import Result from "../../common/Result";
import OTPCode from "../entity/OTPCode";
import OTPRepository from "../respository/OTPRepository";

export default class ValidateCode {
    constructor(readonly otpRepository: OTPRepository) { }

    async execute(userId: string, otpCode: string): Promise<Result<Boolean>> {
        const codeByUser = await this.otpRepository.getByUserId(userId)
        if (!codeByUser) return Result.fail('Usuário não existe.')
        const code = new OTPCode(
            codeByUser?.user_id,
            codeByUser?.user_phone,
            codeByUser?.otp_code,
            codeByUser?.created_at
        )

        if (!code.isMatch(otpCode)) return Result.fail('Código inválido.')
        if (!code.isValid()) return Result.fail('Código não está mais válido.')

        await this.otpRepository.invalidateCode(codeByUser.id)

        return Result.ok(true)
    }
}