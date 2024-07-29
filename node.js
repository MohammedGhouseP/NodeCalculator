const fs = require("fs");

fs.readdir('test',(err,files)=>{
    if(err) console.log(err)
    else console.log(files)
})