// Given an array on "n" elements, and a target element of "t". Return the index of "t" in the array. If "t" is not present in the array then return "-1".

function linearSearch(arr, t) {
    for (let i = 0; i < arr.length; ++i) {
        // console.log("arr[i]: ", arr[i])
        if (arr[i] === t) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch([2, 7, 21, 59, 10], 20))