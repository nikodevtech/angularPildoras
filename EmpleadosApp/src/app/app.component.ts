import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  titulo = 'Listado Empleados';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSueldo: number = 0;
  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Programador', 2500),
    new Empleado('Maria', 'Gomez', 'Secretaria', 1500),
    new Empleado('Pedro', 'Perez', 'Director', 3000),
    new Empleado('Carlos', 'Alvarez', 'CTO', 5500),
  ];

  agregarEmpleado(): void {
    let miEmpleado: Empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSueldo
    );
    this.empleados.push(miEmpleado);
  }
}
