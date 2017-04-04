 removeTodo(todo) {
     this.wakanda.catalog.then(ds => {
         ds['Todo'].find(todo.ID).then(c => {
             c.delete().then(() => {
                 this.todos.splice(this.todos.indexOf(todo), 1);
             });
         });
     });
 }