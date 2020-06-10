import express from 'express'
import mysql from "mysql";

import isEmpty from 'lodash/isEmpty'
import validator from 'validator'
let router = express.Router();

var connection = mysql.createConnection({ //创建mysql实例
    host: '106.53.114.60',
    port: '3306',
    user: 'root',
    password: 'Qq123456__0',
    database: 'login'
});



const validateIpute = (data) => {
    let errors = {};
    if (validator.isEmpty(data.username)) {
        errors.username = "名字为空"
    }
    if (validator.isEmpty(data.password)) {
        errors.username = "名字为空"
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}
router.post('/', (req, res) => {
    const {
        errors,
        isValid
    } = validateIpute(req.body)
    if (!isValid) {
        res.status(400).json(errors)
    } else {
        res.send("chenggg")
    }
})

router.post('/regist', (req, res) => {
    const {
        errors,
        isValid
    } = validateIpute(req.body)
    if (!isValid) {
        res.status(400).json(errors)
    } else {
        connection.connect();
        // var sql = 'SELECT * FROM user';
        var sql = `SELECT username FROM user WHERE username='${req.body.username}'`;

        var str = ''
        connection.query(sql, function (err, result) {
            if(err){
                res.write('{"err":1,"msg":"数据库错误"}');
                console.log(err)
                res.end()
              }else{
                if(result.length>0){
                  res.write('{"err":1,"msg":"用户名已存在"}');
                  res.end();
                }else{
                  res.write('{"err":0,"msg":"注册成功"}');
                  connection.query(`INSERT INTO user (username,password) VALUES ('${req.body.username}','${req.body.password}')`);
                  res.end();
                }
              }
            str = JSON.stringify(result);
        });
        connection.end();
    }
})

export default router