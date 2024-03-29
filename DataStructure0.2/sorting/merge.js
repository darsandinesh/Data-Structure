function mergeSort(arr) {

    if (arr.length < 2) {
        return arr
    }
    let mid = Math.floor(arr.length / 2)
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right))

}

function merge(left, right) {

    let sortedarr = []
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            sortedarr.push(left.shift())
        } else {
            sortedarr.push(right.shift())
        }
    }
    return [...sortedarr, ...left, ...right]

}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, -10]
console.log(mergeSort(arr))