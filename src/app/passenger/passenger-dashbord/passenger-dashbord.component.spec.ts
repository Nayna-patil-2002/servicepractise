import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerDashbordComponent } from './passenger-dashbord.component';

describe('PassengerDashbordComponent', () => {
  let component: PassengerDashbordComponent;
  let fixture: ComponentFixture<PassengerDashbordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassengerDashbordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerDashbordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
