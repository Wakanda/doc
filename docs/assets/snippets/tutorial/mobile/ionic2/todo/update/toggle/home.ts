 toggleCompletion(todo) {
    this.wakanda.catalog.then(ds => {
        ds['Todo'].find(todo.ID).then(c => {
            c['completed'] = todo.completed = !todo.completed;
            c.save();
        });
    });
}