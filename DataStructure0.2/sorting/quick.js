// function quickSort(arr) {

//     if (arr.length < 2) {
//         return arr
//     }
//     let pivot = arr[arr.length - 1]
//     let left = [];
//     let right = [];
//     for (let i = 0; i < arr.length-1; i++) {
//         if (arr[i] > pivot) {
//             left.push(arr[i])
//         } else {
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]

// }


function quickSort(arr) {

    if(arr.length<2)
        return arr
    let pivot = arr[arr.length - 1]
    let left = []
    let rigth = []
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>pivot){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(rigth)]
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
console.log(quickSort(arr))