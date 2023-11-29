// Given a SORTED array of "n" length, and a target element "t", find the index of "t" in the array. Return "-1" if the target element is not present in the array.

// Binary search only works with SORTED arrays

// check to see if array has elements, if it does, check to see if the target is equal to that element.
// if element is greater than the middle element, search that way and disregard the other half
// if the element is less than the middle element, search that way and dieregard the other half


function recursiveBinary(arr, target) {
    // if (arr.length === 0) return -1;

    return search(arr, target, 0, arr.length-1);
}

function search(arr, target, leftIndex, rightIndex) {
    if (leftIndex > rightIndex) return -1;
    
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);
    
    if(arr[middleIndex] === target){
        return middleIndex;
    } else if (target > arr[middleIndex]) {
        return search(arr, target, leftIndex + 1, rightIndex)
    } else {
        return search(arr, target, leftIndex, rightIndex - 1)
    }
}   

// Big O = O(logn) - logarithmic, because everytime it is called the input size is halved. 

console.log(recursiveBinary([-5,-2,-1,2,5,10,60], 10))
console.log(recursiveBinary([-5,-2,-1,0,5,10,60], 50))
console.log(recursiveBinary([], 50))