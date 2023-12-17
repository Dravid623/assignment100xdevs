// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.
// console.log(process.cwd());
const fs = require('fs')
const data = new Promise((resolve, rejects)=>{
    fs.readFile('./week-2/01-async-js/easy//file.txt', 'utf8',(err,data)=>{
        if(err){
            rejects(`error in reading file: ${err.message}`);
        } else{
            resolve(data);
        }
    })
})

data.then((data)=>{
    console.log('here is the data from file')
console.log(data);
})
.catch((err)=>{
    console.log(err);
})
