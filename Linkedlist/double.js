class Node{
    constructor(value){
        this.value = value;
        this.tail = null;
        this.prev = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head.prev = node
            this.head = node
        }
        this.size++
    }

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
        }else{
            let current = this.head
            let arr1 = []
            while (current.next) {
                //arr1.push(current.value)
                current = current.next
            }
            let arr2 = []
            while(current){
                console.log('ajsfghajosg')
                console.log(current.value)
                arr2.push(current.value)
                current = current.prev
            }
            console.log("reverse array : ",arr2)
            console.log("",arr1)
        }
    }
}

const list = new linkedList()
list.prepend(30)
list.prepend(20)
list.prepend(10)
list.print()