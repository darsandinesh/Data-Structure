function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        let change = 0
        if(arr[i]>arr[i+1]){
            temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1]=temp
            change =1
        }
        if((i == arr.length-1) & change ==1){
            i=0
        }
    }
    return arr
}

console.log(bubbleSort([5,3,7,1,5,2]))