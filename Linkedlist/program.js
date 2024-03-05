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

    getSize() {
        return this.size
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

    print() {
        if (this.isEmpty()) {
            console.log('Linked list is empty!!!')
        } else {
            let current = this.head
            let listValues = ''
            while (current) {
                listValues += `${current.value}`
                current = current.next
            }
            console.log(listValues)
        }
    }
}

const list = new linkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()