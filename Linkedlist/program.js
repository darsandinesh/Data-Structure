// to create a new node in the linked list 
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

// to modifiy the linked list 
class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    // to check if the linked list is empty or not
    isEmpty() {
        return this.size === 0
    }

    // to get the size of the linked list 
    getSize() {
        return this.size
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            let node = new Node(value)
            let current = this.head
            for (let i = 0; i < index - 1; i++) {
                current = current.next
            }
            node.next = current.next
            current.next = node
        }
    }


    // add a new node at the begining of the linked list
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

    // add a new node at the end of the linked list
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

    // used to print the elements in the linked list 
    print() {
        if (this.isEmpty()) {
            console.log('Linked list is empty!!!')
        } else {
            let current = this.head
            let listValues = []
            while (current) {
                listValues.push(current.value)
                current = current.next
            }
            console.log(listValues)
        }
    }
}

// to create a new instant of the linkedlist 
const list = new linkedList()
console.log(list.isEmpty())
console.log(list.getSize())
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()