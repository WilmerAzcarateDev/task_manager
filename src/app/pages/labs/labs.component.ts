import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css',
})
export class LabsComponent {
  welcome = 'Hola !!';

  tasks = signal([
    'Instalar el proyecto',
    'Crear proyecto',
    'Crear componente',
  ]);

  name = signal('Wilmer');

  age = signal(18);

  disabled = true;

  imagen = 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg';

  person = {
    name: 'Wilmer',
    age: 18,
    avatar: 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg',
  };

  colorCtrl= new FormControl('');

  withControl = new FormControl(0);

  constructor(){
    this.colorCtrl.valueChanges.subscribe((value)=>console.log(value));
    this.withControl.valueChanges.subscribe((value)=>console.log(value));
  }

  clickHandler() {
    alert('Hola');
  }

  dbClickHandler() {
    alert('Hola x2');
  }

  changeHandler(event: Event) {
    const input = event.target as HTMLInputElement;
    const newAge = parseInt(input.value);
    this.age.set(newAge);
  }

  changeHandler2(event: Event) {
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.name.set(newValue);
  }

  keyDownHandler(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
  }

  shiftHandler() {
    console.log('Presionaste shift + t');
  }
}
