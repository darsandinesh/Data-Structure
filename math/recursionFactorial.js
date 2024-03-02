function recFact(n) {
    if (n < 1) {
        return 1
    }
    return n * recFact(n - 1)
}
console.log(recFact(5))
// Big-O = O(n)