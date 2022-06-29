import nodemailer from 'nodemailer'

class EmailService {
    transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth:{
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD
            }
        })
    }


    async SendActivationEmail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: 'Активация аккаунта MyInf',
            text: '',
            html:
                `
                <div>
                    <h1>Для активации аккаунта перейдие по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
        })
    }

    async SendRecoveryEmail(to, link) {
        await this.transporter.sendMail({
            from: process.env.SMTP_USER,
            to: to,
            subject: 'Восстановление доступа к аккаунту MyInf',
            text: '',
            html:
                `
                <div>
                    <h1>Для смены пароля перейдие по ссылке</h1>
                    <a href="${link}">${link}</a>
                </div>
                `
        })
    }

}

export default new EmailService();