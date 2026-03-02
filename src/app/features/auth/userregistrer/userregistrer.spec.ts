import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Userregistrer } from './userregistrer';

describe('Userregistrer', () => {
  let component: Userregistrer;
  let fixture: ComponentFixture<Userregistrer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Userregistrer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Userregistrer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
