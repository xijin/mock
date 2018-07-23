
let express = require('express');    //引入express模块
let mock = require('./mock');
let https = require('https'); 
let fs = require('fs');
let path = require('path');

//根据项目的路径导入生成的证书文件  
var privateKey  = fs.readFileSync(path.join(__dirname, './private.pem'), 'utf8');  
var certificate = fs.readFileSync(path.join(__dirname, './file.crt'), 'utf8');  
var credentials = {key: privateKey, cert: certificate};  


let app = express(); 
app.use(mock());

var httpsServer = https.createServer(credentials, app);  

/**
 * 监听8090端口
 */
httpsServer.listen('8090', function () {
    console.log('HTTPS Server is running on: https://localhost:%s', 8090);
});