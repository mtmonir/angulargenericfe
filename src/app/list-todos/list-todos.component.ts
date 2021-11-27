import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    {id:1, description: "Setup Repository"},
    {id:2, description: "Setup Project directory in local machine"},
    {id:3, description: "Clone or add repository with git init command"},

  ];
  constructor() { }

  ngOnInit(): void {
  }

}
