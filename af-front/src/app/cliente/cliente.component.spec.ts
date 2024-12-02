import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteComponent } from './cliente.component';
//import { CommonModule } from '@angular/common'; // Adicionar módulos necessários

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteComponent], // Corrigido para "declarations"
      imports: [CommonModule] // Incluir módulos necessários
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve ser criado', () => {
    expect(component).toBeTruthy();
  });
});
