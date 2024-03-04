// to declare map , is simlar to obj
const map = new Map([['a', 3], ['b', 10]])

// to add new element
map.set('c', 11)

console.log(map)

// to find
console.log(map.has('a'))

// to delete
map.delete('c')

// to find the size
console.log(map.size)

// to delete all the elements from the mao
map.clear()

// to loop the map
for (const [key, value] of map) {
    console.log(`${key} : ${value}`)
}