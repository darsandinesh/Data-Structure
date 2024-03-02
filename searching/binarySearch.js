function binarySearch(arr, n) {
    let left = 0
    let rigth = arr.length - 1
    while (left <= rigth) {
        let middle = Math.floor((left + rigth) / 2)
        if (arr[middle] == n) {
            return middle
        }
        if (n < arr[middle]) {
            rigth = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}

console.log(binarySearch([-2, 3, 4, 7, 8], 0))
console.log(binarySearch([-2, 3, 4, 7, 8], 8))
console.log(binarySearch([-2, 3, 4, 7, 8], 4))

// Big-O = O(log n )