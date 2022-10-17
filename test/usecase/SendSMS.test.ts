import SendSMS from "../../src/domain/usecase/SendSMS"
import TwilioHttpMemory from "../../src/infra/memory/TwilioHttpMemory"

test('should send a sms', async () => {
    const input = {
        code: "123456",
        userPhone: "19998305135",
        from: "19998305135"
    }

    const sender = new TwilioHttpMemory()
    const userCase = new SendSMS(sender)
    const response = await userCase.execute(input.code, input.userPhone, input.from)


    expect(response?.to).toBe('+5519998305135')
})