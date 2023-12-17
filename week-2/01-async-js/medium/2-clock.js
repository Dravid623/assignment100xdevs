// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats - 

//  - HH:MM::SS (Eg. 13:45:23)

//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)

let date = ()=>{
    let data = new Date();
    console.log(data.toLocaleTimeString('en-US', { hour12: true })); // toLocalTimeString() is used to change format either in 12hrs or 24hrs
    // console.log(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);
    // process.stdout.write(`${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}\r`); 
    // process.stdout.write is helpful to write output in same line and \r return the pointer to the begining of line
}
setInterval(date,1000);