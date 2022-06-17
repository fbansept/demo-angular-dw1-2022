import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarteUtilisateurComponent } from './carte-utilisateur.component';

describe('CarteUtilisateurComponent', () => {
  let component: CarteUtilisateurComponent;
  let fixture: ComponentFixture<CarteUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarteUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarteUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
