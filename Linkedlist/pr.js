class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
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

    array(arr){
        for(let i=0;i<arr.length;i++){
            const node = new Node(arr[i])
            if(this.isEmpty()){
                this.head = node
            }else{
                let current  = this.head
                while(current.next){
                    current = current.next
                }
                current.next = node
            }
            this.size++
            console.log(node)
        }
        
    }

    prepand(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('Lineked list is empty')
        }else{
            let current = this.head
            let arr = []
            while(current){
                arr.push(current.value)
                current = current.next
            }
            console.log(arr)
        }
    }
}

// const list = new LinkedList()
// list.print()
// list.prepand(10)
// list.print()
const list1 = new LinkedList()
list1.array([4,5,6,7,8])
// list1.print()
