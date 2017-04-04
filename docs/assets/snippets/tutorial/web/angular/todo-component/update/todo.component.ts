
toggleCompletion(todo) {
    this.wakanda.catalog.then(ds => {
        ds['Todo'].find(todo.ID).then(c => {
            c['completed'] = todo.completed = !todo.completed;
            c.save();
        });
    });
}

editTodo(todo) {
    todo.editing = true;
}

cancelEditingTodo(todo) {
    todo.editing = false;
}

confirmEditTodo(todo, editedTitle) {
    todo.editing = false;
    this.wakanda.catalog.then(ds => {
        ds['Todo'].find(todo.ID).then(c => {
            c['label'] = editedTitle;
            c.save().then((() => {
                todo.label = editedTitle
            }));
        });
    });
}


