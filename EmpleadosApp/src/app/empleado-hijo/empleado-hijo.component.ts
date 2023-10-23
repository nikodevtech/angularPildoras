import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent {
  @Input() indice: number ;
  @Input() empleado: Empleado;

  caracteristicasVector: string[] = [];

  addCaracteristica(nuevaCaracteristica: string) {
    this.caracteristicasVector.push(nuevaCaracteristica);
  }
}
