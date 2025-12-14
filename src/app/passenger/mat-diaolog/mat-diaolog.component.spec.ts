import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDiaologComponent } from './mat-diaolog.component';

describe('MatDiaologComponent', () => {
  let component: MatDiaologComponent;
  let fixture: ComponentFixture<MatDiaologComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDiaologComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatDiaologComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
