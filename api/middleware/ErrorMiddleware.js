import ApiError from '../exeptions/ApiError.js'

function ErrorMiddleware (err, req, res, next) {
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message, errors: err.errors })
  }
  console.log(err)
  return res.status(500).json({ message: 'Unknown error, notify administrator!', errors: err })
}

export default ErrorMiddleware
