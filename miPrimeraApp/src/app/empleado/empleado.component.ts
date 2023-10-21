import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent {

  nombre: string = 'Juan';
  apellido: string = 'Diaz';
  edad: number = 10;
  empresa: string = 'Google';
  deshabilitarInput: boolean = false;
  empleadoRegistrado: boolean = false;
  textoRegistro: string = "No hay nadie registrado"

  setRegistroUsuario() {
    this.empleadoRegistrado = false;
  }
  
  getRegistroUsuario(evento: Event) {
    if((<HTMLInputElement>evento.target).value == "registrado") {
      this.textoRegistro = "Empleado registrado";
    } else {
      this.textoRegistro = "No hay nadie registrado";
    }   
  }
}
