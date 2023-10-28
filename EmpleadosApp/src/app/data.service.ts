import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';

@Injectable()
export class DataService {
  constructor(private httpClient: HttpClient) {}

  guardarEmpleados(arrayEmpleados: Empleado[]): void {
    this.httpClient
      .put(
        'URLFIREBASE',
        arrayEmpleados
      ) .subscribe(
        (response) => console.log('Se han guardado los datos ', response),
        (error) => console.log('Error al guardar los datos ', error)
      );
     
  }
}
