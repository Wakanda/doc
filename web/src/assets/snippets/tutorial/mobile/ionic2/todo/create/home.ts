addTodo() {
    let addModal = this.modalCtrl.create(AddTodoPage);
    addModal.onDidDismiss((todo) => {
        if (todo) {
            this.saveTodo(todo);
        }
    });
    addModal.present();
}

saveTodo(todo) {
    this.todos.push(todo);
}