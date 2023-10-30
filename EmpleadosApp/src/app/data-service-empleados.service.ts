import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root',
})
export class DataServiceEmpleadosService {
  empleados: Empleado[] = [];

  constructor(
    private servicioAlert: ServicioEmpleadosService,
    private dataService: DataService
  ) { }

  agregaEmpleadoServicio(empleado: Empleado) {
    this.servicioAlert.muestraMensaje('Empleado añadido: ' + empleado.nombre);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  buscaEmpleado(id: number): Empleado {
    return this.empleados[id];
  }
  actualizaEmpleado(empleado: Empleado, id: number): void {
    const empleadoModificado = this.empleados[id];
    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.sueldo = empleado.sueldo;
    this.dataService.actualizarEmpleado(empleadoModificado, id);
  }
  eliminarEmpleado(id: number, empleado: Empleado): void {
    this.empleados.splice(id, 1);
    this.servicioAlert.muestraMensaje(
      `Empleado eliminado: ${empleado.nombre} ${empleado.apellido} ${empleado.cargo}`
    );
    this.dataService.eliminarEmpleado(id);
    if (this.empleados != null) {
      this.dataService.guardarEmpleados(this.empleados);
    }
  }

  obtenerEmpleados() {
    return this.dataService.cargarEmpleados();
  }
  setEmpleados(empleados: Empleado[]) {
    this.empleados = empleados;
  }
}
