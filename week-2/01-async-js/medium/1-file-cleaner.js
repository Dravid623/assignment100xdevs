// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```
const fs = require('fs');
const promise = new Promise((resolve, rejects)=>{
    fs.readFile('./week-2/01-async-js/easy//file.txt', 'utf8',(err,data)=>{
        if(err){
            rejects(`error in reading file: ${err.message}`);
        } else{
            resolve(data);
        }
    })
})

promise.then((data)=>{
      const modifiedContent = data.replace(/\s+/g, ' ').replace(/\n\s*\n/g, '\n');
      return modifiedContent;
}).then((fileContent)=>{
     fs.appendFile('./week-2/01-async-js/easy/file.txt', fileContent + '\n', 'utf8', (err) => {
    // fs.writeFile('./week-2/01-async-js/easy/file.txt',fileContent, 'utf8', (err)=>{
    if(err){console.log(`there is some error ${err.message}`)}
    else{console.log('file has been writen')}
    })
})