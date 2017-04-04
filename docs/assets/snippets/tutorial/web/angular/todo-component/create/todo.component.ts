newTodo() {
    this.wakanda.catalog.then(ds => {
        let todo = ds['Todo'].create({
            label: this.newTodoText,
            completed: false
        });
        todo.save().then(() => {
        	alert('saved')
            this.todos.push({
                ID: todo['ID'],
                label: this.newTodoText,
                completed: false
            });
        this.newTodoText = ""; //clear the input 
        });
    });
}