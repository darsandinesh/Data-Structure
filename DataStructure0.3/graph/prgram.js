class Graph{
    constructor(){
        this.list = {};
    }
    
    addVertex(v){
        if(!this.list[v]){
            this.list[v] = new Set();
        }
    }
    
    addEdge(v1,v2){
        if(!this.list[v1]){
            this.addVertex(v1);
        }
        if(!this.list[v2]){
            this.addVertex(v2);
        }
        this.list[v1].add(v2);
        this.list[v2].add(v1);
    }
    
    display(){
        for(let v in this.list){
            console.log(v , "->" , [...this.list[v]]);
        }
    }
    
    hasEdge(v1,v2){
        return (
            this.list[v1].has(v2) && 
            this.list[v2].has(v1)
        )
    }
    
    deleteEdge(v1,v2){
        this.list[v1].delete(v2);
        this.list[v2].delete(v1);
    }
    
    deleteVertex(v){
        if(!this.list[v]){
            return ;
        }
        for(let vertex of this.list[v]){
            this.deleteEdge(v,vertex)
        }
        delete this.list[v];
    }
}

const graph = new Graph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addEdge('A','B')
graph.addEdge('B','C')
graph.display()
console.log(graph.hasEdge('A','B'))
console.log(graph.hasEdge('A','C'))
graph.deleteVertex('C')
// graph.deleteEdge('B','C')
graph.display()