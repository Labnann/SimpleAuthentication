const hello = require('./helloworld');
console.log("Utils.js prints->/n")
hello.helloFunction();
console.log(`\n ${hello.name}`);

console.log(hello.testDirectFunction()+" "+hello.testDirect);
setInterval(()=>{hello.helloFunction()},2000);
setTimeout(()=>{console.log(hello.testDirectFunction())},4000);


