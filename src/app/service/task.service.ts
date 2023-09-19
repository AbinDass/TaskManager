import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Tasks } from '../mock-tasks';
import {Observable, of} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks():Task[]{
    const tasks = window.localStorage.getItem('tasks');
    if(!tasks) return [];
    return JSON.parse(tasks);
  }

  addTasks(task: Task){
    // this.Task.push(task);
    let tasks = this.getTasks();
    tasks.unshift(task);
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  deleteTask(tasks:Task[]):void{
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  strikeItem(task:Task):void{
    let tasks = this.getTasks();
    let out = tasks.find((x)=> x.text === task.text)
    if(out) out.reminder = !out.reminder
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    
  }
}
