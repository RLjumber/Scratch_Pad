// given an array of integers, sort the arr

// divide the arr ino sub arrs, each containing only one element

// repeatedly merge the arrs to produce new sorted sub arrs until there is only one arr remaining.

arr = [-6, 20, 8, -2, 4]


function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, middle)
    const rightArr = arr.slice(middle, arr.length)
    return merge(mergeSort(leftArr), mergeSort(rightArr))

}

function merge(leftArr, rightArr) {
    let sortedArr = [];

    while(leftArr.length && rightArr.length) {
        if(leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr]
}

console.log(mergeSort(arr))