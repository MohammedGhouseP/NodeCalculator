const fs = require("fs");


//writing data
// fs.writeFile("./test.txt", "hey there's new data in newData.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully written");
//   }   
// });


//file  to append the data
// fs.appendFile("./test.txt", '\n'+"hey there new data h", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully append");
//   }
// });


//deleting data
// fs.unlinkSync("./test.txt", "hey there's new data in newData.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully deleted");
//   }   
// });


//writing data
// fs.writeFile("./test.txt", "hey there's new data in newData.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully written");
//   }   
// });



// rename file
// fs.renameSync("./test.txt", "dataWithRename.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("successfully renamed");
//   }   
// });




// file reading with simple code and with async

// let data = fs.readFileSync('./data.txt', 'utf8')
// console.log(data)



// this below code should be run in node.js/otheer file that exist out of the folder to get the list of file in directory

// const fs = require("fs");
// fs.readdir('test',(err,files)=>{
//     if(err) console.log(err)
//     else console.log(files)
// })

