import SMS from "../../src/domain/entity/SMS"

test('should generate a sms entity', () => {
    const input = {
        code: "123456",
        userPhone: "19998305135",
        fromPhone: "19998305135"
    }

    const sms = new SMS(input.code, input.userPhone, input.fromPhone)

    expect(sms.message()).toBe('123456 é seu código de verificação do App Corneteiro.')
})