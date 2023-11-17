// Given a SORTED array of "n" length, and a target element "t", find the index of "t" in the array. Return "-1" if the target element is not present in the array.

// Binary search only works with SORTED arrays

function binarySearch2(arr, t) {
    // check to see if array has values, if it does, check to see if the target is equal to that element.
    // if element is greater than the middle element, search that way and disregard the other half
    // if the element is less than the middle element, search that way and dieregard the other half

    if(arr.length === 0) return -1;

    let leftPointer = arr[0];
    let rightPointer = arr.length - 1;

    while (leftPointer <= rightPointer) {
        let middleIndex = Math.floor((leftPointer + rightPointer) / 2)

        if(t === arr[middleIndex]) {
            // everytime the while loop occurs, and the middleIndex doesn't equal the target value, then the pointers get shrunk to their half until one of the middleIndex's is equal to the target
            return middleIndex;
        } else if (t < arr[middleIndex]) {
            rightPointer = middleIndex - 1;
        } else leftPointer = middleIndex + 1;
    }
    return -1;
}
// Big O is O(logn)- logarithmic, not linear. Because with every iteration the input size is reduced by half.


console.log(binarySearch2([-5,-2,-1,2,5,10,60], 10))
console.log(binarySearch2([-5,-2,-1,0,5,10,60], 50))
console.log(binarySearch2([], 50))

function binarySearch(arr, t) {

    if(arr.length === 0) {
        console.log("array is empty!")
        return -1;
    }

    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] === t) {
            return i;
        }
    }
    return -1;
};
// apparently this isn't how to do binary search although it works


// console.log(binarySearch([-5,-2,-1,5,10,60], 10))
// console.log(binarySearch([-5,-2,-1,0,5,10,60], 50))
// console.log(binarySearch([], 50))