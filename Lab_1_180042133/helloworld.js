const hello = ()=>{
    console.log('Hello World');
}
hello();
const name = "Labnan";
module.exports={helloFunction:hello,name};
console.log(module);

module.exports.testDirect= "directly assigning key value";
module.exports.testDirectFunction=()=> {return "the function was assigned into exports directly"};
console.log(module);