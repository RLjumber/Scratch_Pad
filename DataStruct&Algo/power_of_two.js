// Given a positive integer "n", determine if the number is a power of 2 or not

// AN integer is a power of two if there exists an integer "x" such that "n" === 2**n

// 2**1 = true
// 2**1 = true

function powerOfTwo(n) {

    if (n === 1 || n === 2 ) return true;

    for (let i=3; i<=Math.sqrt(n); ++i) {
        if (2**i===n) return true;
    }
    return false;
}

// console.log(powerOfTwo(0))

// I DID THIS ALL MYSELFFF
// time complexity would be O(sqrt(n)) !! non-linear

console.log(powerOfTwoLame(18));