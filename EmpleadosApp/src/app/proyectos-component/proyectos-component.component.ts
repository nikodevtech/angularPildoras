import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { DataServiceEmpleadosService } from '../data-service-empleados.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})
export class ProyectosComponentComponent {
 
  //Inyeccion dependencia de Router y servicio 
  constructor(private router: Router, private miServicioData: DataServiceEmpleadosService) { 
    this.empleados = this.miServicioData.empleados;
  }
  volverHome() {
    this.router.navigate(['/home']); //Usando la dependencia de Router para redirigir a la ruta
  }
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSueldo: number = 0;
  empleados: Empleado[] = [];



  agregarEmpleado(): void {
    let miEmpleado: Empleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSueldo
    );
    //Usando la dependencia del servicio de la data de los empleados
    this.miServicioData.agregaEmpleadoServicio(miEmpleado);
    this.router.navigate(['/home']);
  }
}
