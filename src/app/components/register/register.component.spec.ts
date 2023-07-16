import { ComponentFixture, TestBed } from '@angular/core/testing';
 import { RegisterComponent } from './register.component';
 describe('RegisterComponent', () => {
  // Declaración de variables
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
   beforeEach(() => {
    // Configuración de TestBed para el componente RegisterComponent
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
    });
     // Creación de una instancia del componente RegisterComponent
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
     // Detección de cambios en el componente
    fixture.detectChanges();
  });
   it('should create', () => {
    // Prueba para verificar que el componente se haya creado correctamente
    expect(component).toBeTruthy();
  });
});