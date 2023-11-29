// given a staircase of "n" steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time.

// climbingStaircase(n) = cS(n-1) + cS(n-2)
// the sum of n is equal to the sum of the two steps below it, with n = 1 and n = 2 having 1 and 2 ways to climb respectively.

// function climbingStaircase(n) {
//     if(n <= 2) {
//         return n;
//     }

//     result = n-1 + n-2;
//     return result;
// };

function climbingStaircase(n) {
    const numOfWays = [1,2]

    for(let i=2; i<=n; i++) {
        numOfWays[i] = numOfWays[i-1] + numOfWays[i-2];
        console.log("numofways of i = ",numOfWays[i])
    }

    return numOfWays[n-1] //this returns the index, so n-1 when n=1 returns 0 index, aka 1
}

console.log(climbingStaircase(1))
console.log(climbingStaircase(2))
console.log(climbingStaircase(3))
console.log(climbingStaircase(4))
console.log(climbingStaircase(5))