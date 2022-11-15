new Vue ({
    el: "#root",
    data:{
        todos: [
            {
                text: "fare gli esercizi",
                done: true
            },
            {
                text: "andare in palestra",
                done: true
            },
            
        ],
        
        newTodo:"",
    },
    
    methods:{
        aggiungi(){
            this.todos.push(this.newTodo)
        },
        eliminaTodo(index){
            this.todos.splice(index,1)
        }
    },
    
})
