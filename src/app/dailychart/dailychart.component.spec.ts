import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailychartComponent } from './dailychart.component';

describe('DailychartComponent', () => {
  let component: DailychartComponent;
  let fixture: ComponentFixture<DailychartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailychartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailychartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
