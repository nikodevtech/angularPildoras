import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServiceEmpleadosService } from './data-service-empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { QuienesComponentComponent } from './quienes-component/quienes-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import { RouterModule, Routes } from '@angular/router';
import { ModificaEmpleadoComponent } from './modifica-empleado/modifica-empleado.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponentComponent
  },
  {
    path: 'proyectos',
    component: ProyectosComponentComponent
  },
  {
    path: 'quienes',
    component: QuienesComponentComponent
  },
  {
    path: 'contacto',
    component: ContactoComponentComponent
  },
  {
    path: 'modifica/:id',
    component: ModificaEmpleadoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    QuienesComponentComponent,
    ContactoComponentComponent,
    ModificaEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ServicioEmpleadosService,
    DataServiceEmpleadosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
