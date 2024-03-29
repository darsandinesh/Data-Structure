// function bubbleSort(arr) {

//     for (let i = 0; i < arr.length - 1; i++) {
//         let change = 0;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] < arr[j]) {
//                 temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//         if (change > 0) {
//             i = -1;
//         }
//     }
//     return arr

// }


function bubbleSort(arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let change = 0
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        if (change > 0) i = -1
    }
    return arr
}

let arr = [4, 5, 3, 2, 8, 9, 10, 3, 1, 56]
console.log("orginal arr is :" + arr)
console.log("sorted arr is :" + bubbleSort(arr))

