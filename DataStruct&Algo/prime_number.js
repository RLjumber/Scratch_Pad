// Give a natural number 'n', determine if the number is prime or not

// A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

// isPrime(5) = true(1*5 or 5*1)
// isPrime(4) = false(2*2 = 4)

function myIsPrime(n) {
    // if any two numbers < n multiply to n
    if (n = 1) return false;

    for (let i = 1; i < n; ++i) {

        for (let j = n; j > 1; --j) {

            if (n[i] * n[j] != n) {
                return true;
            } else return false;
    }
    }
};

function tutorIsPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i < n; i++) {
        // run until i is less than n, because any number is divisible upon itself
        if (n%i === 0) {
            // if n's remainder after division of any number i (any number from 2 until n) is 0, that means at least one number was divisible, making it not a prime number.
            return false;
        }
    }
    return true;
}
// time complexity = O(n) linear



// whenever n = a*b, one of the two factors is less than or equal to the square root of n. 

// per essempio: n=24, a=4, b=6
// sqrt|24 = 4.89
// 4 < 4.89

function optimizedIsPrime(n) {
    if (n < 2) return false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
        // run until i is less than the square root of n, because: any composite number (not prime) will have one factor less than the sqrt. If i does not find a product by then it is prime. Less time.
        if (n%i === 0) {
            return false;
        }
    }
    return true;
}

// time complexity = O(sqrt(n))



console.log(optimizedIsPrime(5));