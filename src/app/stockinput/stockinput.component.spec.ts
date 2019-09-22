import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockinputComponent } from './stockinput.component';

describe('StockinputComponent', () => {
  let component: StockinputComponent;
  let fixture: ComponentFixture<StockinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
