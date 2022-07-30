import robokassa from 'node-robokassa'
import 'dotenv/config'

class RobokassaService {
  static helper = new robokassa.RobokassaHelper({

    merchantLogin: process.env.ROBOKASSA_LOGIN,
    hashingAlgorithm: process.env.ROBOKASSA_HASHING_ALGORITHM || 'sha256',
    password1: process.env.ROBOKASSA_PASSWORD1,
    password2: process.env.ROBOKASSA_PASSWORD2,

    testMode: process.env.ROBOKASSA_ISTEST,
    resultUrlRequestMethod: 'POST'
  })

  static GenerateUrl (orderId, email, productId, outSum, invDesc) {
    const options = {
      invId: orderId,
      email,
      outSumCurrency: 'RUB',
      isTest: process.env.ROBOKASSA_ISTEST,
      userData: {
        productId,
        username: email
      }
    }

    return this.helper.generatePaymentUrl(outSum, invDesc, options)
  }
}

export default RobokassaService
