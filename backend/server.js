import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import users from './routes/users'

const app = express();
app.use(cors())
app.use(bodyParser.json())

app.use('/api/users',users)



app.get('/', function (req, res) {
  res.send("str"); ////服务器响应请求
});

app.listen(8081, () => console.log("server is running"));
