import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomedemoComponent } from './homedemo.component';

describe('HomedemoComponent', () => {
  let component: HomedemoComponent;
  let fixture: ComponentFixture<HomedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
