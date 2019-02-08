import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodosComponent } from './components/Todos/todos.component';
import { MainFormComponent } from './components/MainForm/MainFormComponent';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    MainFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
