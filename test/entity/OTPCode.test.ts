import OTPCode from "../../src/domain/entity/OTPCode"

test('should create expires at with 15 minutes plus created at', () => {
    const createdAt = new Date('2022-10-10T21:45:00.000Z')
    const code = new OTPCode('1', "19998305135", "111111", createdAt)

    expect(code.expiresAt).toStrictEqual(new Date('2022-10-10T22:00:00.000Z'))
    expect(code.createdAt).toStrictEqual(new Date('2022-10-10T21:45:00.000Z'))
})

test('should create a OTP Code valid', () => {
    const createdAt = new Date('2022-10-10T21:45:00.000Z')
    const code = new OTPCode('1', "19998305135", "111111", createdAt)

    expect(code.isValid()).toBe(true)
})

test('should validate if code is match', () => {
    const createdAt = new Date('2022-10-10T21:45:00.000Z')
    const code = new OTPCode('1', "19998305135", "111111", createdAt)

    expect(code.isMatch("111111")).toBe(true)
})