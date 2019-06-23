const express = require('express')
const app = express()
var mysql = require('mysql');
// 设置跨域
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //设置允许跨域的域名，*代表允许任意域名跨域
    res.header("Access-Control-Allow-Headers", "content-type"); //允许的header类型
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS"); //跨域允许的请求方式
    if (req.method.toLowerCase() == 'options')
        res.send(200); //让options尝试请求快速结束
    else
        next();
});


// 连接数据库
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'login'
});
connection.connect();

// 接受请求
app.get('/Login', (req,res) => {
    new Promise(function(resolve,reject){
        connection.query('SELECT * FROM login_user WHERE username = ?', req.query.userName , function (error, results){
                if (error) throw error;
                results_JSON = JSON.parse(JSON.stringify(results))[0]
                // console.log(results_JSON)
                // console.log(results_JSON.username + ':' + results_JSON.password)
                resolve(results_JSON.password)
        })
    }).then(function(pass){
        // console.log(req.query.password + ':' + pass)
        if(req.query.password == pass){
            res.send({
                success: 'success'
            })
        }else{
            res.send({
                error: 'error'
            })
        }
    }).catch(function(error){
        console.log(error)
    })
})

app.listen(3000, () => console.log('http://localhost:3000'));