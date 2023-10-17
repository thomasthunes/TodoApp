import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private apiUrl = 'http://localhost:8080';
  private todosUrl = `${this.apiUrl}/todos`;

  constructor(private http: HttpClient) {}

  getTodos(): Observable<any> {
    return this.http.get(this.todosUrl);
  }

  createTodo(jsonData: any): Observable<any> {
    return this.http.post(this.todosUrl, jsonData);
  }

  deleteTodo(id: any): Observable<any> {
    const url = `${this.todosUrl}/${id}`;
    return this.http.delete(url);
  }
}
