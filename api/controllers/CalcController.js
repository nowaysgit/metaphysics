import fetch from 'node-fetch'

class CalcController {
  static async GetMainCalc (req, res, next) {
    try {
      if (!req.user) {
        // res.status(401).send("Вы не авторизованны и не можете увидеть калькулятор!");
      }
      if (req.query && !req.query.url) {
        req.query.url = 'http://client.feng-tools.ru/svetlana-sharnova?'
        for (const name of Object.keys(req.query)) {
          if (name === 'url') { continue }
          req.query.url = req.query.url + name + '=' + req.query[name] + '&'
        }
      }
      fetch(`${req.query.url.toString()}`).then(resp => resp.text()).then(function (data) {
        data = data.replace('</title>', '</title><base href="http://localhost:8080/" />')
        data = data.replace('<link rel="stylesheet" type="text/css" href="style.css">', '<link rel="stylesheet" type="text/css" href=" http://localhost:8080/style-main-calc.css"></head>')
        data = data.replace('script.js', 'http://localhost:8080/script.js')

        res.status(200).send(data)
      })
    } catch (e) {
      return next(e)
    }
  }

  static async GetBazi (req, res, next) {
    try {
      if (req.query && !req.query.url) {
        req.query.url = 'http://portal.feng-tools.ru/free_apps/bazi.jsp?'
        for (const name of Object.keys(req.query)) {
          if (name === 'url') { continue }
          req.query.url = req.query.url + name + '=' + req.query[name] + '&'
        }
      }
      fetch(`${req.query.url.toString()}`).then(resp => resp.text()).then(function (data) {
        data = data.replace('</title>', '</title><base href="http://localhost:8080/" />')
        data = data.replace('<link rel="stylesheet" type="text/css" href="style.css?20180624">', '<link rel="stylesheet" type="text/css" href="./style-bazi-calc.css"></head>')

        data = data.replace('<a style="color: #333" target="_top" href="http://portal.feng-tools.ru/?from=">калькуляторы фэн шуй</a> на <a target="_top" href="http://portal.feng-tools.ru/?from=">portal.feng-tools.ru</a>', '')

        res.status(200).send(data)
      })
    } catch (e) {
      return next(e)
    }
  }

  static async GetGuaPeople (req, res, next) {
    try {
      if (req.query && !req.query.url) {
        req.query.url = 'http://portal.feng-tools.ru/free_apps/gua.jsp?'
        for (const name of Object.keys(req.query)) {
          if (name === 'url' || name === 'mode') { continue }
          req.query.url = req.query.url + name + '=' + req.query[name] + '&'
        }
      }
      fetch(`${req.query.url.toString()}`).then(resp => resp.text()).then(function (data) {
        data = data.replace('</title>', '</title><base href="http://localhost:8080/" />')
        data = data.replace('<link rel="stylesheet" type="text/css" href="style.css?20180624">', '<link rel="stylesheet" type="text/css" href="./style-guapeople-calc.css"></head>')

        data = data.replace('gua.jsp?mode=human&year=', 'http://portal.feng-tools.ru/free_apps/gua.jsp?mode=human&year=')

        data = data.replace('<a style="color: #333" target="_top" href="http://portal.feng-tools.ru/?from=">калькуляторы фэн шуй</a> на <a target="_top" href="http://portal.feng-tools.ru/?from=">portal.feng-tools.ru</a>', '')

        res.status(200).send(data)
      })
    } catch (e) {
      return next(e)
    }
  }

  static async GetGuaHouse (req, res, next) {
    try {
      if (req.query && !req.query.url) {
        req.query.url = 'http://portal.feng-tools.ru/free_apps/gua.jsp?mode=house&'
        for (const name of Object.keys(req.query)) {
          if (name === 'url' || name === 'mode') { continue }
          req.query.url = req.query.url + name + '=' + req.query[name] + '&'
        }
      }
      fetch(`${req.query.url.toString()}`).then(resp => resp.text()).then(function (data) {
        data = data.replace('</title>', '</title><base href="http://localhost:8080/" />')
        data = data.replace('<link rel="stylesheet" type="text/css" href="style.css?20180624">', '<link rel="stylesheet" type="text/css" href="./style-guahouse-calc.css"></head>')

        data = data.replace('gua.jsp?mode=house&gua=', 'http://portal.feng-tools.ru/free_apps/gua.jsp?mode=house&gua=')

        data = data.replace('<a style="color: #333" target="_top" href="http://portal.feng-tools.ru/?from=">калькуляторы фэн шуй</a> на <a target="_top" href="http://portal.feng-tools.ru/?from=">portal.feng-tools.ru</a>', '')

        res.status(200).send(data)
      })
    } catch (e) {
      return next(e)
    }
  }

  static async GetRuler (req, res, next) {
    try {
      if (req.query && !req.query.url) {
        req.query.url = 'http://portal.feng-tools.ru/free_apps/ruler.jsp?'
        for (const name of Object.keys(req.query)) {
          req.query.url = req.query.url + name + '=' + req.query[name] + '&'
        }
      }
      fetch(`${req.query.url.toString()}`).then(resp => resp.text()).then(function (data) {
        data = data.replace('</title>', '</title><base href="http://localhost:8080/" />')
        data = data.replace('<link rel="stylesheet" type="text/css" href="style.css?20180624">', '<link rel="stylesheet" type="text/css" href="./style-ruler-calc.css"></head>')
        data = data.replace('<link rel="stylesheet" type="text/css" href="style.css?20180624">', '<link rel="stylesheet" type="text/css" href="./style-ruler-calc.css"></head>')

        data = data.replace('<a style="color: #333" target="_top" href="http://portal.feng-tools.ru/?from=">калькуляторы фэн шуй</a> на <a target="_top" href="http://portal.feng-tools.ru/?from=">portal.feng-tools.ru</a>', '')

        res.status(200).send(data)
      })
    } catch (e) {
      return next(e)
    }
  }
}
export default CalcController
