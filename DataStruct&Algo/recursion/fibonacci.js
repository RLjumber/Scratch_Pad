// In mathematics, the Fibonacci sequence is a sequence in which each number is the sume of the two preceding ones

// the first two numbers in the sequence are 0 and 1

// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

// find the last number in the sequence

function recursiveFibonacci(n) {
    // break problem into smaller similar problem
    if (n < 2) return n;

    console.log("what the hell",recursiveFibonacci(n-1))

    return recursiveFibonacci(n-1) + recursiveFibonacci(n-2);

}

console.log(recursiveFibonacci(6))