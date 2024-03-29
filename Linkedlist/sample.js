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

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
            this.size++
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            this.size++
        }
    }

    print() {
        if (this.isEmpty()) {
            console.log('linked list is empty!!!')
        } else {
            let current = this.head
            while (current) {
                console.log(current.value)
                current = current.next
            }
        }
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log('Invalid index');
            return;
        }
    
        const node = new Node(value);
    
        if (index === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let i = 0;
            let current = this.head;
            while (i < index - 1) {
                i++;
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
        }
    
        this.size++;
    }
    

}

const list = new linkedList()
list.append(10)
list.append(20)
list.append(40)
list.insert(30,3)
list.print()