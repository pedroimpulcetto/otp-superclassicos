import ValidateCode from "../../src/domain/usecase/ValidateCode"
import OTPRepositoryMemory from "../../src/infra/memory/OTPRepositoryMemory"

test('should validate code', async () => {
    const input = {
        user_id: '1',
        code: "111111"
    }

    const respository = new OTPRepositoryMemory()
    const useCase = new ValidateCode(respository)

    const isValid = await useCase.execute(input.user_id, input.code)


    expect(isValid.isSuccess).toBe(true)
})