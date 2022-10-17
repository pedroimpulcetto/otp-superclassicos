import GenerateCode from "../../src/domain/usecase/GenerateCode"
import OTPRepositoryMemory from "../../src/infra/memory/OTPRepositoryMemory"

test('should generate a code', () => {
    const input = {
        user_id: "1",
        user_phone: "19998305135"
    }

    const now = new Date('2022-10-10T22:00:00.000Z')

    const otpRepositoryMemory = new OTPRepositoryMemory()
    const useCase = new GenerateCode(otpRepositoryMemory)
    const code = useCase.execute(input.user_id, input.user_phone, now)


    expect(otpRepositoryMemory.codes.length).toBe(2)
})