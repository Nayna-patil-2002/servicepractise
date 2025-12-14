import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengercardComponent } from './passengercard.component';

describe('PassengercardComponent', () => {
  let component: PassengercardComponent;
  let fixture: ComponentFixture<PassengercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
