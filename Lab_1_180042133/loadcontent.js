const fs = require('fs');

function read(location){

    return fs.readFileSync(`./content/HTML/${location}`,"utf-8");
}

let route= {
    "/about":read('about.html'),
    "/blog":read('blog.html'),
    "/contact":read('contact.html'),
    "/":read('index.html'),
    "/pricing":read('pricing.html'),
    "/services":read('services.html'),
    "/work":read('work.html')
};


function getData(){
    return route;
}

module.exports={getData};
