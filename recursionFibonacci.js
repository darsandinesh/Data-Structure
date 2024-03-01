function recursionFebonacci(n){
    if(n<2){
        return n
    }
    console.log(n)
    return recursionFebonacci(n-1)+recursionFebonacci(n-2)
}

console.log(recursionFebonacci(0))
console.log(recursionFebonacci(1))
console.log(recursionFebonacci(6))

// O(n) -for loop
// O(2^n)