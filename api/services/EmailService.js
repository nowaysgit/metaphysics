import nodemailer from 'nodemailer'
import 'dotenv/config'

class EmailService {
  transporter

  constructor () {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async SendActivationEmail (to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: 'Вход на сайт',
      text: '',
      html:
                `
                <div>
                    <h1>Для Входа на сайт введите код: ${link.substr(-5)}</h1>
                </div>
                <div>
                    <h1>Или передите по ссылке: </h1>
                    <a href="${link}">${link}</a>
                </div>
                `
    })
  }

  async SendRecordEmail (from) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_MAIL,
      subject: 'Новая запись',
      text: '',
      html:
                `
                <div>
                    <h1>Новая запись</h1>
                </div>
                <div>
                    <h1>Адрес: ${from}</h1>
                </div>
                `
    })
  }
}

export default new EmailService()
