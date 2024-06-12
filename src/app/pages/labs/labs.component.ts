import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = 'Hola !!';

  tasks = [
    'Instalar el proyecto',
    'Crear proyecto',
    'Crear componente'
  ];

  name = 'Wilmer';

  age = 18;

  disabled = true;

  imagen = 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg';

  person = {
    name: 'Wilmer',
    age: 18,
    avatar: 'https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg'
  }

  clickHandler(){
    alert("Hola");
  }

  dbClickHandler(){
    alert("Hola x2");
  }

  changeHandler(event:Event){
    console.log(event);
  }
}
