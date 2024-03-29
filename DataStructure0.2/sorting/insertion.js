function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let numberToInsert = arr[i]
        let j = i - 1
        while (j >= 0 & arr[j] > numberToInsert) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = numberToInsert
    }
    return arr

}


let arr = [2, 4, 6, 3, -9,100, 7, 5, -8]
console.log('orginla array : ' + arr)
console.log('insertion sort : ' + insertionSort(arr))

