import YooKassa from 'yookassa'
import 'dotenv/config'

class YookassaaService {
  static helper = new YooKassa({
    shopId: process.env.YOOKASSA_SHOPID,
    secretKey: process.env.YOOKASSA_SECRETKEY
  })

  static async CreatePayment (orderId, email, productId, outSum, description, quantity) {
    const payment = await this.helper.createPayment({
      amount: {
        value: outSum,
        currency: 'RUB'
      },
      receipt: {
        customer: {
          email
        },
        items: [
          {
            description,
            quantity,
            measure: 'day',
            amount: {
              value: outSum,
              currency: 'RUB'
            },
            vat_code: 1,
            payment_subject: 'service'
          }
        ]
      },
      confirmation: {
        type: 'redirect',
        return_url: `${process.env.CLIENT_URL}pro`
      },
      metadata: {
        orderId,
        productId
      },
      merchant_customer_id: email,
      description: `После оплаты вам (${email}) будет доступна PRO версия на ${description}.`
    })

    return payment.confirmation.confirmation_url
  }
}

export default YookassaaService
