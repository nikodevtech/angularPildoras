import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { LoginService } from './login/login.service';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient, private loginService: LoginService) {}

  cargarEmpleados() {
    const token = this.loginService.getIdToken();
    const urlBD =
    'URLFIREBASE/datos.json?auth=' + token;
    return this.httpClient.get(urlBD);
  }

  guardarEmpleados(arrayEmpleados: Empleado[]): void {
    const urlBD =
      'URLFIREBASE/datos.json';
    this.httpClient.put(urlBD, arrayEmpleados).subscribe(
      (response) => console.log('Se han guardado los datos ', response),
      (error) => console.log('Error al guardar los datos ', error)
    );
  }
  actualizarEmpleado(empleadoActualizado: Empleado, indice: number): void {
    const urlBD = `URLFIREBASE/datos/${indice}.json`;
    this.httpClient.put(urlBD, empleadoActualizado).subscribe(
      (response) => console.log('Se han actualizado los datos ', response),
      (error) => console.log('Error al actualizar los datos ', error)
    );
  }
  eliminarEmpleado(indice: number): void {
    const urlBD = `URLFIREBASE/datos/${indice}.json`;
    this.httpClient.delete(urlBD).subscribe(
      (response) => console.log('Se han eliminado los datos ', response),
      (error) => console.log('Error al eliminar los datos ', error)
    )
  }
}
