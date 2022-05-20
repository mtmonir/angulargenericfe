import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(public  id: number,
    public description: string,
    public   targetDate: Date,
    public isCompleted: boolean) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new  Todo(1, "Setup Repository", new Date(), false),
    new  Todo(2, "Setup Project directory in local machine", new Date(), false),
    new  Todo(3, "Clone or add repository with git init command", new Date(), false),
     new  Todo(1, "Learn coding", new Date(), true),

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
