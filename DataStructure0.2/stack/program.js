class Node{
    constructor(value){
        this.value = value;
        this.next = null;
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
        const node = new Node(value);
        if(!this.isEmpty()){
            node.next = this.head;
        }
        this.head = node;
        this.size++;
    }

    removeFromFront(){
        if(this.isEmpty()){
            console.log('stack is empty !!!');
        }else{
            this.head = this.head.next;
            this.size--;
        }

    }

    print(){
        if(this.isEmpty()){
            console.log('linked list is empty!!')
        }else{
            let current = this.head;
            while(current){
                console.log(current.value);
                current = current.next;
            }
        }
    }
}



class linkedListStack{
    constructor(){
        this.list = new linkedList()
    }

    push(value){
        return this.list.prepend(value)
    }

    pop(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    print(){
        return this.list.print()
    }

    isEmpty(){
        return this.list.isEmpty();
    }

}

const stack = new linkedListStack()
console.log(stack.isEmpty())
stack.push(10)
stack.push(20)
stack.push(30)
stack.pop()
console.log("peek value:",stack.peek())
stack.print()


// usign array implementation of stack;

// class stack {
//     constructor() {
//         this.list = [];
//     }

//     isEmpty() {
//         return this.list.length === 0;
//     }

//     size() {
//         return this.list.length;
//     }

//     push(value) {
//         return this.list.push(value);
//     }

//     pop() {
//         if (this.isEmpty()) {
//             console.log('stack is empty!!');
//         } else {
//             this.list.pop();
//         }
//     }

//     peek() {
//         return this.list[this.size() - 1]
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('stack is empty!!!');
//         } else {
//             console.log(this.list)
//         }
//     }
// }

// const arr = new stack()
// arr.push(10)
// arr.push(20)
// arr.push(30)
// console.log("peek element in the array",arr.peek())
// arr.print()
