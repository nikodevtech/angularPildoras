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
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/guardian-login.guard';

const appRoutes: Routes = [
  {
    path: '',
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
    component: ContactoComponentComponent, canActivate: [LoginGuardian]
  },
  {
    path: 'modifica/:id',
    component: ModificaEmpleadoComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', //Cualquier ruta que no exista se redirige al componente error-personalizado
    component: ErrorPersonalizadoComponent
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
    ModificaEmpleadoComponent,
    ErrorPersonalizadoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    ServicioEmpleadosService,
    DataServiceEmpleadosService,
    DataService,
    LoginService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
