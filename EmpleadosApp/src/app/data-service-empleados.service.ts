import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable({
  providedIn: 'root'
})
export class DataServiceEmpleadosService {

  empleados: Empleado[] = [
    new Empleado('Juan', 'Perez', 'Programador', 2500),
    new Empleado('Maria', 'Gomez', 'Secretaria', 1500),
    new Empleado('Pedro', 'Perez', 'Director', 3000),
    new Empleado('Carlos', 'Alvarez', 'CTO', 5500),
  ];

  constructor(private servicioAlert: ServicioEmpleadosService) { }

  agregaEmpleadoServicio(empleado: Empleado) {
    this.servicioAlert.muestraMensaje('Empleado añadido: ' + empleado.nombre);
    this.empleados.push(empleado);
  }

  buscaEmpleado(id: number): Empleado {
    return this.empleados[id];
  }
  actualizaListaEmpleado(empleadoModificado: Empleado, id: number): void {
    this.empleados[id] = empleadoModificado;
  }
}
