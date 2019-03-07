import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartTestsComponent } from './chart-tests.component';

describe('ChartTestsComponent', () => {
  let component: ChartTestsComponent;
  let fixture: ComponentFixture<ChartTestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartTestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
