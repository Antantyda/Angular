import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  taskArray = [{taskName: "task", isCompleted: false}]
  constructor() {
  }

  onSubmit(form: NgForm) {
    console.log(form);
    this.taskArray.push({
      taskName: form.controls["task"].value,
      isCompleted: false
    })
  }

  ngOnInit(): void {
  }

  onDelete(index: number){
    console.log(index);

    this.taskArray.splice(index, 1)
  }
}
