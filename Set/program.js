// to declare a new set 
// set will not contain duplicate elements
const set = new Set([1,3,2,5,4,8,])

for(const item of set){
    console.log(item)
}
console.log("size of the set is : " + set.size)

// to add new element to the set
set.add(10)

//to check if the element is present or not
console.log(set.has(11))
console.log(set.has(10))

// to delete an element form the set
set.delete(3)

// to delete all the element from the set
set.clear()
console.log(set)