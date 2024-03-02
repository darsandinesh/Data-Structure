function recursionBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
}

function search(arr, target, left, rigth) {
    if (left > rigth){
        return -1
    }
    let middle = Math.floor((left + rigth) / 2)
    if (target == arr[middle]) { 
        return middle 
    }
    if (target < arr[middle]) {
        return search(arr, target, left, middle - 1)
    } else {
        return search(arr, target, middle + 1, rigth)
    }
}

console.log(recursionBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1))
console.log(recursionBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 19))
console.log(recursionBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8))
