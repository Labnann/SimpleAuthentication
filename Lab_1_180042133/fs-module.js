//read,write,append,delete,rename file

const fs = require("fs");
fs.mkdir('./contents',err => {if(err) console.log("Path exists?")});

fs.writeFile('./contents/myfile.txt','Hello world',(err)=>{
    if (err) console.log(err);
    else console.log("done writing");
});

fs.appendFile('./contents/myfile.txt','We are learning NodeJS',(err)=>{
    if (err) console.log(err);
    else console.log("done appending");
});
fs.rename('./contents/myfile.txt','./contents/renamedFile.txt',(err) => {
    if(err) {
        console.log("The name is already taken? Details: ");
        console.log(err);
    }
    else  console.log("done renaming");
});

fs.readFile("./contents/renamedFile.txt","utf-8", (err,data)=> {
    if (err)
        console.log(err);
    console.log(data);

    }
)
console.log("This part should be shown before read data");
fs.readFileSync("./contents/renamedFile.txt","utf-8", (data,err)=>{
    console.log("this should never execute");
    }
);

fs.unlink("./contents/renamedFile.txt",(err)=>{
    if(err) console.log(err);
    console.log("Done deleting");
})