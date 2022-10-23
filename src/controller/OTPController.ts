import { PrismaClient } from "@prisma/client";
import Result from "../common/Result";
import OTPCode from "../domain/entity/OTPCode";
import GenerateCode from "../domain/usecase/GenerateCode";
import SendSMS from "../domain/usecase/SendSMS";
import ValidateCode from "../domain/usecase/ValidateCode";
import OTPRepositoryDatabase from "../infra/database/OTPRepositoryDatabase";
import Twilio from "../infra/http/Twilio";

export default class OTPController {
    constructor(readonly databaseConnection: PrismaClient) { }

    async validateCode(userId: string, otpCode: string): Promise<Result<Boolean>> {
        const repository = new OTPRepositoryDatabase(this.databaseConnection)
        const useCase = new ValidateCode(repository)
        const result = useCase.execute(userId, otpCode)
        return result
    }

    async generateCode(userId: string, userPhone: string, dateNow: Date): Promise<Result<OTPCode>> {
        const from = process.env.TWILIO_PHONE_NUMBER ? process.env.TWILIO_PHONE_NUMBER : ''
        const repository = new OTPRepositoryDatabase(this.databaseConnection)
        const useCase = new GenerateCode(repository)
        const code = await useCase.execute(userId, userPhone, dateNow)
        const httpSender = new Twilio()
        const httpUseCase = new SendSMS(httpSender)
        const response = await httpUseCase.execute(code.otpCode, code.userPhone, from)
        if (response?.errorCode !== null) return Result.fail('Número de telefone inválido.')
        return Result.ok(code)
    }
}
