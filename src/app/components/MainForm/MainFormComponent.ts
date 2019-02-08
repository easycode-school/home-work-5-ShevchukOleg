import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnChanges, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

export class NewTodo {
  constructor ( public title: string, public text: string) {}
}

@Component({
  selector: 'app-form',
  templateUrl: './MainFormComponent.html',
  styleUrls: ['./MainFormComponent.css']
})
export class MainFormComponent {
  @Output() createdNewTodo = new EventEmitter();
  public newTodo: NewTodo;
  /**
   * onSubmitHandler - обработчик отрпавления формы, сосьавляет новую задачу, передает ее в активатор события,
   * сбрасывает форму
   * @param form - получаемые данные о состоянии формы во время отправки
   */
  onSubmitHandler(form: NgForm) {
    this.newTodo = new NewTodo(form.value.title, form.value.text);
    this.createdNewTodo.emit(this.newTodo);
    form.reset();
  }
}

