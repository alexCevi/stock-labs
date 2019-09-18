import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeeklychartComponent } from './weeklychart.component';

describe('WeeklychartComponent', () => {
  let component: WeeklychartComponent;
  let fixture: ComponentFixture<WeeklychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeeklychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeeklychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
