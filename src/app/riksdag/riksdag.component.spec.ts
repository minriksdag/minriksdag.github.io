import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiksdagComponent } from './riksdag.component';

describe('RiksdagComponent', () => {
  let component: RiksdagComponent;
  let fixture: ComponentFixture<RiksdagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiksdagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiksdagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
