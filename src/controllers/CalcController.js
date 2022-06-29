//import CalcService from "../services/CalcService.js";
import fetch from 'node-fetch';

class CalcController {
    static async GetMainCalc(req, res, next) {
        try {
			if(!req.user) {
				//res.status(401).send("Вы не авторизованны и не можете увидеть калькулятор!");
			}
            if(req.query && !req.query.url) {
				req.query.url = 'http://client.feng-tools.ru/svetlana-sharnova?';
				for(let name of Object.keys(req.query)) {
					if (name === "url") continue;
					req.query.url = req.query.url + name + '=' + req.query[name] + '&';
				}
			}
			console.log(req.query.url);
			fetch(`${req.query.url.toString()}`).then((resp) => resp.text()).then(function(data) {
				data = data.replace('</title>','</title><base href="http://localhost:8080/" />');
				data = data.replace('</head>','<link rel="stylesheet" type="text/css" href="./jquery-ui.css"></head>');
				data = data.replace('</head>','<link rel="stylesheet" type="text/css" href="./bootstrap.min.css"></head>');
				data = data.replace('</head>','<link rel="stylesheet" type="text/css" href="./style-main-calc.css"></head>');
				
				data = data.replace('</head>','<script src="./jquery-ui.min.js"></script></head>');
				data = data.replace('</head>','<script src="./jquery-ui.min.js"></script></head>');
				data = data.replace('</head>','<script src="./script.js"></script></head>');
				data = data.replace('</head>','<script src="./findcities.js"></script></head>');
				res.status(200).send(data);
			});
        } catch (e) {
            return next(e)
        }
    }
}
export default CalcController;