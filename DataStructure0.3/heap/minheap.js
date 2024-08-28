class minHeap {
    constructor() {
        this.arr = [];
        this.size = 0;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }

    getRightChild(index) {
        return 2 * index + 2;
    }

    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    hasLeftChild(i) {
        return this.getLeftChild(i) < this.size;
    }

    hasRightChild(i) {
        return this.getRightChild(i) < this.size;
    }

    parent(i) {
        return this.arr[this.getParentIndex(i)];
    }

    leftChild(i) {
        return this.arr[this.getLeftChild(i)];
    }

    rightChild(i) {
        return this.arr[this.getRightChild(i)];
    }

    swap(i1, i2) {
        let temp = this.arr[i1];
        this.arr[i1] = this.arr[i2];
        this.arr[i2] = temp;
    }

    insert(value) {
        this.arr[this.size] = value;
        this.size++;
        this.heapifyUp(this.size - 1);
    }

    heapifyUp(index) {
        if (this.hasParent(index) && this.parent(index) > this.arr[index]) {
            this.swap(this.getParentIndex(index), index);
            this.heapifyUp(this.getParentIndex(index));
        }
    }

    removeMin() {
        if (this.size === 0) {
            console.log('heap is empty');
            return;
        }
        const data = this.arr[0];
        this.arr[0] = this.arr[this.size - 1];
        this.size--;
        this.heapifyDown(0);
        return data;
    }

    heapifyDown(index) {
        while (this.hasLeftChild(index)) {
            let smallestChildIndex = this.getLeftChild(index);
            if (this.hasRightChild(index) && this.rightChild(index) > this.leftChild(index)) {
                smallestChildIndex = this.getRightChild(index);
            }
            if (this.arr[index] > this.arr[smallestChildIndex]) {
                break;
            }
            this.swap(index, smallestChildIndex);
            index = smallestChildIndex;
        }
    }

    display() {
        let arr =[]
        for (let i = 0; i < this.size; i++) {
            arr.push(this.arr[i]);
        }
        console.log(arr)
    }
}

const h = new minHeap();
h.insert(10);
h.insert(50);
h.insert(20);
// h.insert(11);
h.insert(8);
h.insert(3);
h.insert(5);
h.display();
h.removeMin();
console.log('remove')
h.display();
