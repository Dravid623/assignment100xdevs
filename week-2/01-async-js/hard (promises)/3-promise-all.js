/*
    * `Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
    * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
    * Print how long it took for all 3 promises to resolve.`
 */


function waitOneSecond(n1) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, n1*1000);
    })
}

function waitTwoSecond(n2) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, n2*1000);
    })
}

function waitThreeSecond(n3) {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve();
        }, n3*1000);
    })
}

function calculateTime(n1,n2,n3) {
    let date1 = new Date();
    return Promise.all([
        waitOneSecond(n1),
        waitTwoSecond(n2),
        waitThreeSecond(n3)
    ]).then(()=>{
        let date2 = new Date();
        const duration = date2 - date1;
        return duration;
    })
}

module.exports = calculateTime;