import SMS from "../entity/SMS";
import HttpSms from "../respository/HttpSms";

export default class SendSMS {
    constructor(readonly sender: HttpSms) { }

    async execute(code: string, userPhone: string, fromPhone: string): Promise<any> {
        const sms = new SMS(code, userPhone, fromPhone)
        const sent = this.sender.send(sms.message(), sms.from(), sms.to())
        return sent
    }
}