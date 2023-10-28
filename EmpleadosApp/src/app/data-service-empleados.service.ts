import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class DataServiceEmpleadosService {
  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Programador', 2500),
    new Empleado('Maria', 'Gomez', 'Secretaria', 1500),
    new Empleado('Pedro', 'Perez', 'Director', 3000),
    new Empleado('Carlos', 'Alvarez', 'CTO', 5500),
  ];

  constructor(
    private servicioAlert: ServicioEmpleadosService,
    private dataService: DataService
  ) {}

  agregaEmpleadoServicio(empleado: Empleado) {
    this.servicioAlert.muestraMensaje('Empleado añadido: ' + empleado.nombre);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  buscaEmpleado(id: number): Empleado {
    return this.empleados[id];
  }
  actualizaListaEmpleado(empleadoModificado: Empleado, id: number): void {
    this.empleados[id] = empleadoModificado;
  }
  eliminarEmpleado(id: number, empleado: Empleado): void {
    this.empleados.splice(id, 1);
    this.servicioAlert.muestraMensaje(
      `Empleado eliminado: ${empleado.nombre} ${empleado.apellido} ${empleado.cargo}`
    );
  }
}
