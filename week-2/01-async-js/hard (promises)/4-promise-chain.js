/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond(a) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },a*1000)
    })
}

function waitTwoSecond(b) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve();
        },b*1000)
    })
}

function waitThreeSecond(c) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve();
        },c*1000)
    })
}

function calculateTime(a,b,c) {
    let t1 = new Date();
    return new Promise((resolve,reject)=>{
        resolve(waitOneSecond(a));
    }).then(()=>{
        return new Promise((resolve,reject)=>{
            resolve(waitTwoSecond(b));
        })
    }).then(()=>{
        return new Promise((resolve,reject)=>{
            resolve(waitThreeSecond(c));
        })
    }).then(()=>{
    let t2 = new Date();
    const duration = (t2 - t1);
    return duration;
    })

}
module.exports = calculateTime;