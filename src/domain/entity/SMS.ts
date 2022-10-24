export default class SMS {
    code: string
    userPhone: string
    fromPhone: string

    constructor(code: string, userPhone: string, fromPhone: string) {
        this.code = code
        this.userPhone = userPhone
        this.fromPhone = fromPhone
    }

    message() {
        return `${this.code} é seu código de verificação do App Corneteiro.`
    }

    to() {
        return `+55${this.userPhone}`
    }

    from() {
        return `+${this.fromPhone}`
    }

}