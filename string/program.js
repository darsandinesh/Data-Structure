let str = "malayalam"

// reverse
let newStr = str.split('').reverse().join('')
console.log(newStr)

// palindrom
if (str === newStr) {
    console.log('palindrom')
} else {
    console.log('not palindrom')
}

// reverse using recursion
function reverseString(str) {
    if (str === "") {
        return ""
    } else {
        return reverseString(str.substr(1)) + str.charAt(0)
    }
}
console.log(reverseString("hello"))
