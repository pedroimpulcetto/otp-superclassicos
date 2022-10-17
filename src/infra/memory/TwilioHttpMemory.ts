import HttpSms from "../../domain/respository/HttpSms";

export default class TwilioHttpMemory implements HttpSms {
    constructor() { }

    async send(message: string, from: string, to: string): Promise<any> {
        return {
            "account_sid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "api_version": "2010-04-01",
            "body": "This is the ship that made the Kessel Run in fourteen parsecs?",
            "date_created": "Thu, 30 Jul 2015 20:12:31 +0000",
            "date_sent": "Thu, 30 Jul 2015 20:12:33 +0000",
            "date_updated": "Thu, 30 Jul 2015 20:12:33 +0000",
            "direction": "outbound-api",
            "error_code": null,
            "error_message": null,
            "from": from,
            "messaging_service_sid": "MGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "num_media": "0",
            "num_segments": "1",
            "price": null,
            "price_unit": null,
            "sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
            "status": "sent",
            "subresource_uris": {
                "media": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Media.json"
            },
            "to": to,
            "uri": "/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages/SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX.json"
        }
    }

}