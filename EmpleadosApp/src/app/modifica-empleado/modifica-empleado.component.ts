import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { DataServiceEmpleadosService } from '../data-service-empleados.service';

@Component({
  selector: 'app-modifica-empleado',
  templateUrl: './modifica-empleado.component.html',
  styleUrls: ['./modifica-empleado.component.css'],
})
export class ModificaEmpleadoComponent {
  cuadroNombre: string = '';
  cuadroApellido: string = '';
  cuadroCargo: string = '';
  cuadroSueldo: number = 0;
  empleados: Empleado[] = [];
  idEmpleado: number = 0;
  accion: string;

  //Inyeccion dependencia de Router y servicio por constructor
  constructor(
    private router: Router,
    private miServicioData: DataServiceEmpleadosService,
    private route: ActivatedRoute
  ) {
    this.empleados = this.miServicioData.empleados;
    //Se obtiene el id recibido por parametro en la url
    this.idEmpleado = this.route.snapshot.params['id'];
    //Se obtiene el accion recibido por parametro en la url
    this.accion = this.route.snapshot.queryParams['accion'];
    //Se cargan los datos del empleado con dicho id
    let empleado = this.miServicioData.buscaEmpleado(this.idEmpleado);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSueldo = empleado.sueldo;
  }

  volverHome() {
    this.router.navigate(['/home']); //Usando la dependencia de Router para redirigir a la ruta
  }

  accionEmpleado() {


    if(this.accion == "modificar") {
      let empleadoModificado = new Empleado(
        this.cuadroNombre,
        this.cuadroApellido,
        this.cuadroCargo,
        this.cuadroSueldo
      )
      this.miServicioData.actualizaListaEmpleado(empleadoModificado, this.idEmpleado);
      this.router.navigate(['/home']);
    } else {
      this.miServicioData.eliminarEmpleado(this.idEmpleado, this.empleados[this.idEmpleado]);
      this.router.navigate(['/home']);
    }
  }
}
