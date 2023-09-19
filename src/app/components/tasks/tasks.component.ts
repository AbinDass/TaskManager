import { Component, OnInit } from '@angular/core';
import {Tasks} from '../../mock-tasks';
import {Task} from '../../Task'
import { TaskService } from 'src/app/service/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task [] = [];
  constructor(private tasksService: TaskService){

  }

  ngOnInit():void {
    this.tasks = this.tasksService.getTasks();
  }
  
  deleteTask(task:Task){
    console.log()
    console.log(this.tasks)
        this.tasks = this.tasks.filter(t=> t.text !== task.text)
        this.tasksService.deleteTask(this.tasks)
  }
  addTask(event:Task){
    console.log(event)
    this.tasksService.addTasks(event)
    this.tasks.unshift(event)
  }
}
