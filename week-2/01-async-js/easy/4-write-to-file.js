// Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const readLine = require('readline');
const fs = require('fs');
const r1 = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

// let fileContent
let promise = new Promise((resolve, reject)=>{
        r1.question('enter the content you want to write in file! : ',(data)=>{
      if(data){resolve(data)};
    r1.close();
})
})

promise.then((fileContent)=>{
      fs.appendFile('./week-2/01-async-js/easy/file.txt', fileContent + '\n', 'utf8', (err) => {
    // fs.writeFile('./week-2/01-async-js/easy/file.txt',fileContent, 'utf8', (err)=>{
    if(err){console.log(`there is some error ${err.message}`)}
    else{console.log('file has been writen')}
    })
}
)