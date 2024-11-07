
import { Component, Input } from '@angular/core';
import { Tarefa } from '../../Tarefa';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

  @Input() tarefa!: Tarefa;

  faTimes = faTimes
}