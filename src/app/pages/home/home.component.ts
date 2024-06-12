import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: 'Instalar angular',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear proyecto',
      completed: false,
    },
    {
      id: Date.now(),
      title: 'Crear componente',
      completed: false,
    },
  ]);

  items = computed(() => {
    if (this.tasks().length == 0 || this.tasks().length > 1) {
      return 'items';
    } else {
      return 'item';
    }
  });

  newTaskCtrl = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required],
  });

  changeHandler() {
    if (this.newTaskCtrl.valid) {
      const newTask = this.newTaskCtrl.value.trim();
      if (newTask.length != 0) {
        this.addTask(newTask);
      }
    }
    this.newTaskCtrl.setValue('');
  }

  addTask(title: string) {
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number) {
    this.tasks.update((tasks) =>
      tasks.filter((task, position) => index !== position)
    );
  }

  updateTask(index: number) {
    this.tasks.update((tasks) => {
      return tasks.map((task, position) => {
        if (position === index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  }
}
