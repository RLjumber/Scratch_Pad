

var isPalindrome = function(x) {

    arr = [];

    for (let i = 0; i < x.length; ++i) {
        const newVal = x[i]
        console.log(newVal)
    //    arr.push(newVal);
    }

    
    return arr;

    // let string = String(x);

    // return string;
}


// console.log(isPalindrome(121));


var consoleThis = function(x) {

    if (x != 0) {
        // make number a string
        const num = String(x);

        let arr = []
        
        // loop over string backwards

        for (let i = num.length - 1; i >= 0; --i) {
            let val = num[i];
            // grab each value and push it into the arr
            arr.push(val);
        }
        // join each individual val into one string
        const reverse = arr.join("");
        
        if (reverse === num ) {
            // check if this string is equal to the original num
            return true;
        } else {
            return false;
        }
        
    } else {
        return false;
    }

}

console.log(consoleThis(121));
