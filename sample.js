class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        this.size++
    }

    insertBefore(value, data) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            if (this.head.value === data) {
                node.next = this.head
                this.head = node
            } else {
                let current = this.head
                while (current.next) {
                    if (current.next.value === data) {
                        node.next = current.next
                        current.next = node
                        break;
                    }
                    current = current.next
                }
            }
        }
        this.size++
    }

    print() {
        if (this.isEmpty()) {
            console.log('linked list is empty')
        } else {
            let arr = []
            let current = this.head
            while (current) {
                arr.push(current.value)
                current = current.next
            }
            console.log(arr)
        }
    }
}

const list = new linkedList()
list.prepend(10)
list.prepend(20)
list.append(100)
list.append(120)
list.append(123)
list.insertBefore(111, 10)
list.print()

