import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter
  faTimes = faTimes;

  constructor(private taskService:TaskService){

  }
  onDelete(currtask: Task) {
    this.onDeleteTask.emit(currtask);
  }

  changeReminder(task: Task) {
    this.task.reminder = !this.task.reminder
    this.taskService.strikeItem(task)
  }
}
