import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Wakanda } from '../../app/wakanda.service';

@Component({
  selector: 'page-edit-todo',
  templateUrl: 'edit-todo.html',
  providers: [Wakanda]
})
export class EditTodoPage {

  todo: any;

  constructor(public wakanda: Wakanda,
    public navParams: NavParams,
    public view: ViewController) {
    this.todo = navParams.get('todo');
  }


  saveEditedTodo(todo, editedTitle) {
    this.wakanda.catalog.then(ds => {
      ds['Todo'].find(todo.ID).then(c => {
        c['label'] = editedTitle;
        c.save();
        this.view.dismiss(todo);
      });
    });
  }

  close() {
    this.view.dismiss();
  }

}
