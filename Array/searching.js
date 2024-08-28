const arr = [1,7,4,9,3,2,5,6]

// to find the array element at index 4
console.log(arr[4])

// find the element 5 form the array and return the index value
for(let i=0;i<arr.length;i++){
    if(arr[i] == 5) {
        console.log("index of 5 is " +":"+ i)
    }
}


// add elements at the end of the array , element :10
arr.push(10)
console.log(arr)

// add element in the front of the array, element :0
arr.unshift(0)
console.log(arr)

// remove element from the fornt
arr.shift()
console.log(arr)

// remove element from the end of the array
arr.pop()
console.log(arr)