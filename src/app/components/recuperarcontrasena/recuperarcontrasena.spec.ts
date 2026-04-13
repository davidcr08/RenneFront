import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Recuperarcontrasena } from './recuperarcontrasena';

describe('Recuperarcontrasena', () => {
  let component: Recuperarcontrasena;
  let fixture: ComponentFixture<Recuperarcontrasena>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recuperarcontrasena]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Recuperarcontrasena);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
