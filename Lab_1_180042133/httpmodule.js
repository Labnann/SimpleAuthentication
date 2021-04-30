const http = require('http');
const siteData =require('./loadcontent').getData();
const notFound="The thing you are looking for must be in some other castle!" +
    "How about going  <a href = '/'>here</a>!";

const server = http.createServer((req,res)=>{
    console.log(req.url);
    if(siteData[req.url]==undefined) {res.writeHead(404,{'content-type':'text/html'});
    res.end(notFound);
    }

    else
    res.write(siteData[req.url]);
    res.end();
});
module.exports={getServer:server};