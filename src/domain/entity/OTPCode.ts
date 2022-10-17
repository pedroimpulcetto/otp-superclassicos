export default class OTPCode {
    userId: string
    userPhone: string
    otpCode: string
    valid: boolean
    createdAt: Date
    expiresAt: Date

    EXPIRATION = 15


    constructor(
        userId: string,
        userPhone: string,
        otpCode: string,
        createdAt: Date,
    ) {
        this.userId = userId
        this.userPhone = userPhone
        this.otpCode = otpCode
        this.createdAt = createdAt
        this.valid = true
        this.expiresAt = this.generateExpiresDate()
    }

    generateExpiresDate(): Date {
        const expiresAt = new Date(this.createdAt)
        expiresAt.setMinutes(expiresAt.getMinutes() + this.EXPIRATION)
        return expiresAt
    }

    isValid(): boolean {
        return this.valid
    }

    isMatch(code: string): boolean {
        if (code === this.otpCode) return true
        return false
    }
}