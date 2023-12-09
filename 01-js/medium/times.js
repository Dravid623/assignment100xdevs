/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    let s1=0;
    let t1=0;
    const startTime = new Date();
    for(let i=0; i<=n; i++){
        s1 += i;
    }
    const endTime = new Date();
    t1 =  endTime - startTime ;
    console.log(t1)
    return t1;
}
calculateTime(1)
calculateTime(10)
calculateTime(100);
calculateTime(100000);
calculateTime(1000000000)
calculateTime(100000000000000000000000000000000000000000000000000000)