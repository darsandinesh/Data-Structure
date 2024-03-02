function bubbleSort(arr) {
    let change = 0
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] > arr[i + 1]) {
            let temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            change = 1
        }
        if ((i == arr.length - 2) & change == 1) {
            change=0
            i = -1
        }
    }
    return arr
}

console.log(bubbleSort([5, 3, 7, 1, 5, 2]))