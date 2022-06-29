import express from 'express';
import cookieParser from "cookie-parser";
import sequelize from "./db.js";
import "./models/index.js";
import fetch from 'node-fetch';
const app = express();
import 'dotenv/config';
const port = process.env.PORT || 8080;
import router from "./routes/index.js";

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use('/', router);

const start = async () => {  
  try {
    await sequelize.authenticate()
    await sequelize.sync()
    app.listen(port, () => {
      return console.log(`server is listening on ${port}`);
    });
  } catch (e) {
    console.log(e)
  }
};

start();

export default app;
