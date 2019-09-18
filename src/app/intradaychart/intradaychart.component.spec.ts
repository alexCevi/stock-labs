import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntradaychartComponent } from './intradaychart.component';

describe('IntradaychartComponent', () => {
  let component: IntradaychartComponent;
  let fixture: ComponentFixture<IntradaychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntradaychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntradaychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
