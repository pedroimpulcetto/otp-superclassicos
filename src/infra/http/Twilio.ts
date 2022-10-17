import HttpSms from "../../domain/respository/HttpSms";

export default class Twilio implements HttpSms {
    constructor() { }

    async send(message: string, from: string, to: string): Promise<any> {
        const accountSid = process.env.TWILIO_ACCOUNT_SID;
        const authToken = process.env.TWILIO_AUTH_TOKEN;
        const client = require('twilio')(accountSid, authToken);

        const response = await client.messages
            .create({
                body: message,
                from: from,
                to: to
            })

        return response
    }

}