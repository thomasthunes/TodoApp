import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  formData = {
    summary: '',
    description: '',
  };

  title = 'todo-app';
  todos: any;

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  onSubmit(todoForm: any) {
    const jsonData = { ...this.formData };
    this.todoService.createTodo(jsonData).subscribe(() => {
      this.resetForm();
      this.loadTodos();
    });
  }

  deleteTodo(id: any) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.loadTodos();
    });
  }

  loadTodos() {
    this.todoService.getTodos().subscribe((data) => {
      this.todos = data;
    });
  }

  resetForm() {
    this.formData = {
      summary: '',
      description: '',
    };
  }
}
