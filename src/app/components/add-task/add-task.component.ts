import { Component,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  @Output() onAddTask:EventEmitter<Task> = new EventEmitter();
  text!: string;
  day!:string;
  showAddTask:boolean = false;
  subscription: Subscription;
  // reminder!:boolean;
   constructor( private uiService :UiService){
    this.subscription = this.uiService.onToggle().subscribe((value)=> this.showAddTask = value)

   }
onSubmit(){
  if (!this.text){
    alert ('please add a task')
    return
  }
    const newTask = {
    text:this.text,
    day:this.day,
    reminder:true,
  };

  this.onAddTask.emit(newTask);
  this.text =''
}
}
