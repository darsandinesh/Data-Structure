let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// bubble sorting algo
function bubbleSort(arr) {

    do {
        swapped = false
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp
                swapped = true;
            }
        }
    } while (swapped)
    return arr

}

console.log("Bubble sorting algo:", bubbleSort(arr))

// insertion sort algo

function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let element = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > element) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = element;
    }
    return arr

}

console.log("Insertion Sort algo: ", insertionSort(arr))

// selection sorting algo

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr


}

console.log("Selection Sort algo: ", selectionSort(arr))

// Quick sort algo

function quickSort(arr) {

    if (arr.length < 2) {
        return arr
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let rigth = [];
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            rigth.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(rigth)]

}

console.log("Quick Sort algo: ", quickSort(arr))

//MergeSort

function mergeSort(arr) {

    

}

function merge(left, right) {

   
}


console.log("Merge Sort algo: ", mergeSort(arr))

