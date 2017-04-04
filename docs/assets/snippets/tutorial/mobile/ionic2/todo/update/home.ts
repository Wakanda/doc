editTodo(todo) {
    let addModal = this.modalCtrl.create(EditTodoPage, {
        todo: todo
    });
    addModal.present();
}
