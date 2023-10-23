import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { DataServiceEmpleadosService } from '../data-service-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent {

  titulo = 'Listado Empleados';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSueldo: number = 0;
  empleados: Empleado[] = [];

  constructor(private miServicioData: DataServiceEmpleadosService) {
    this.empleados = this.miServicioData.empleados;
  }

  agregarEmpleado(): void {
    let miEmpleado: Empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSueldo
    );
    this.miServicioData.agregaEmpleadoServicio(miEmpleado);
  }
}
