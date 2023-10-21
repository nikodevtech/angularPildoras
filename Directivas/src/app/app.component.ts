import { Component } from '@angular/core';
import { EntradaBlog } from './entrada-blog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Registro de Usuarios';
  mensaje: string = '';
  registrado: boolean = false;
  nombre: string = '';
  apellidos: string = '';
  cargo: string = '';
  entradasBlog: EntradaBlog[] = [
    {
      titulo: 'Javascript vs Angular',
      contenido: 'Random',
    },
    {
      titulo: 'C# vs ASP.NET',
      contenido: 'Random',
    },
    {
      titulo: 'Java vs Spring',
      contenido: 'Random',
    },
    {
      titulo: 'Python vs Django',
      contenido: 'Random',
    },
  ];

  registrar() {
    this.registrado = true;
    if (this.apellidos.length > 0 && this.nombre.length > 0)
      this.mensaje = "Usuario Registrado";
    else this.mensaje = 'Rellena todos los campos';
  }
}
