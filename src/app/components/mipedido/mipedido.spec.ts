import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mipedido } from './mipedido';

describe('Mipedido', () => {
  let component: Mipedido;
  let fixture: ComponentFixture<Mipedido>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mipedido]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mipedido);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
