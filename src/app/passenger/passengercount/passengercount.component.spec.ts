import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengercountComponent } from './passengercount.component';

describe('PassengercountComponent', () => {
  let component: PassengercountComponent;
  let fixture: ComponentFixture<PassengercountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengercountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengercountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
