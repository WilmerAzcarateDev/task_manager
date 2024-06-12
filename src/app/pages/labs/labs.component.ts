import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
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

  age = 18;

  disabled = true;

  imagen = 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg';

  person = {
    name: 'Wilmer',
    age: 18,
    avatar: 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg',
  };

  clickHandler() {
    alert('Hola');
  }

  dbClickHandler() {
    alert('Hola x2');
  }

  changeHandler(event: Event) {
    console.log(event);
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
