import express from 'express'
import cookieParser from 'cookie-parser'
import sequelize from './db.js'
import './models/index.js'
import 'dotenv/config'
import router from './routes/index.js'
import ErrorMiddleware from './middleware/ErrorMiddleware.js'
const app = express()
const port = process.env.PORT || 8080

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('static'))

app.use('/', router)

app.use(ErrorMiddleware)

const start = async () => {
  if (require.main === module) {
    try {
      await sequelize.authenticate()
      await sequelize.sync()
      app.listen(port, () => {
        return console.log(`API server is listening on ${port}`)
      })
    } catch (e) {
      console.log(e)
    }
  }
}

start()

export default app
