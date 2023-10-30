import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { DataServiceEmpleadosService } from '../data-service-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent {
  titulo = 'Listado Empleados';
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSueldo: number = 0;
  empleados: Empleado[] = [];

  // Cuando se inicia el componente de la clase se inyecta la dependencia DataServiceEmpleadosService
  constructor(private DataServiceEmpleados: DataServiceEmpleadosService) {
    // Llamar al método obtenerEmpleados de DataServiceEmpleados y suscribirse al Observable devuelto
    this.DataServiceEmpleados.obtenerEmpleados().subscribe(
      // Cuando el Observable emita un valor, asignar los valores al array empleados con los datos obtenidos
      (listaEmpleados) => {
        this.empleados = Object.values(listaEmpleados);
        DataServiceEmpleados.setEmpleados(this.empleados);
      });
  }

  agregarEmpleado(): void {
    let miEmpleado: Empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSueldo
    );
    this.DataServiceEmpleados.agregaEmpleadoServicio(miEmpleado);
  }
}
