import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryboxcontainerComponent } from './summaryboxcontainer.component';

describe('SummaryboxcontainerComponent', () => {
  let component: SummaryboxcontainerComponent;
  let fixture: ComponentFixture<SummaryboxcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryboxcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryboxcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
