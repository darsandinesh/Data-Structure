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
        if (!this.isEmpty()) {
            node.next = this.head
        }
        this.head = node
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
            this.size++
        }
    }

    insertBefor(value, data) {
        if (this.isEmpty()) {
            return
        }
        const node = new Node(value)

        if (this.head.value == data) {
            node.next = this.head
            this.head = node
            this.size++
            return
        }

        let current = this.head
        while (current.next) {
            if (current.next.value === data) {
                node.next = current.next
                current.next = node
                this.size++
                break;
            }
            current = current.next
        }

    }

    insetrAfter(value, data) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            return
        }

        let current = this.head
        while (current.next) {
            if (current.value === data) {
                node.next = current.next
                current.next = node
                this.size++
            }
            current = current.next
        }

    }

    deleteNode(value) {
        let current = this.head
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next
                this.size--
                break;
            }
            current = current.next
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('linked list is empty!!!')
        } else {
            let arr = []
            let current = this.head
            while (current) {
                //console.log(current.value)
                arr.push(current.value)
                current = current.next
            }
            console.log(arr)
            console.log(arr.length)
            console.log('-------------------------------------------------------------')
            // to print the linked list in revers order
            for (let i = arr.length-1; i >= 0; i--) {
                console.log(arr[i])
            }
        }
    }

}

const list = new linkedList()
list.prepend(50)
list.prepend(40)
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.prepend(0)
list.append(60)
list.append(70)
list.append(80)
list.insertBefor(-10, 0)
list.insertBefor(65, 70)
list.insertAfter(-2, -10)
list.insertAfter(-68, 65)
// list.deleteNode(0)
list.print()