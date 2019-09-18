import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlychartComponent } from './monthlychart.component';

describe('MonthlychartComponent', () => {
  let component: MonthlychartComponent;
  let fixture: ComponentFixture<MonthlychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
