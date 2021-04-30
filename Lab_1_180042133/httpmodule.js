const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(201,{"Content-Type":"text/plain"})
    res.write("<h1>Hello</h1>");
    res.end();
    console.log(req);
});
module.exports={getServer:server};