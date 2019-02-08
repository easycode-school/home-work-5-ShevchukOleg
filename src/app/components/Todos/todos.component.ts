import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { MainFormComponent, NewTodo } from '../MainForm/MainFormComponent';



@Component({
  selector: 'app-todo',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
  })
export class TodosComponent  {
  public todos = [];
  /**
   * addNewTodo- метод компоненты который добавляет в список новую задачю
   * @param {NewTodo} - новая задачя
   */
  addNewTodo (newTodo: NewTodo) {
    this.todos.push(Object.assign({}, newTodo));
  }
}
