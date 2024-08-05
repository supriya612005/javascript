var http=require('http')
const { CLIENT_RENEG_LIMIT } = require('tls')
http.createServer((req,res)=>{
    res.write("oii")
    res.end()

}).listen(8080)
