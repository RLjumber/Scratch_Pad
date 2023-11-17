// Given an integer 'n', find the factorial of that integer

// In mathematics, the factorial of a non-negative integer 'n', denoted 'n!', is the product of all positive integers less than or equal to 'n'

// factorial of zero is 1

// factorial(4) = 4*3*2*1 = 24


function recursiveFactorial(n) {
    if (n === 0) {
        return 1;
    }

    return n * recursiveFactorial(n-1);
};

console.log(recursiveFactorial(4));

// BIG O = O(n) - Linear
// At n = 4, the function is called 4 times, at n = 10, the function is called 10 times, in this way n increases linearlly 