import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importamos el módulo común

@Component({
  selector: 'app-root',
  standalone: true,  // Marcamos este componente como independiente
  imports: [CommonModule], // Indicamos los módulos que usa
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador: number = 0;

  incrementarContador() {
    this.contador += 1;
  }
}
