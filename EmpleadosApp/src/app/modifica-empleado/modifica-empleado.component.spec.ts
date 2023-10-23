import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEmpleadoComponent } from './modifica-empleado.component';

describe('ModificaEmpleadoComponent', () => {
  let component: ModificaEmpleadoComponent;
  let fixture: ComponentFixture<ModificaEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaEmpleadoComponent]
    });
    fixture = TestBed.createComponent(ModificaEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
