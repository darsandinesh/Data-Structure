function linearSearch(n){
    let arr = [1,5,3,7,2,45]
    for(let i=0;i<arr.length;i++){
        if(arr[i]==n) return i
    }
    return -1
}
console.log(linearSearch(45))
console.log(linearSearch(10))
