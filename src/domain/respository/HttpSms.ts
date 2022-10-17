export default interface HttpSms {
    send(message: string, from: string, to: string): Promise<any>
}