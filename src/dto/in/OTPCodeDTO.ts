export default class OTPCodeDTO {
    constructor(
        readonly id: string,
        readonly user_id: string,
        readonly user_phone: string,
        readonly otp_code: string,
        readonly valid: boolean,
        readonly expires_at: Date,
        readonly created_at: Date,
        readonly updated_at?: Date | null
    ) { }
}