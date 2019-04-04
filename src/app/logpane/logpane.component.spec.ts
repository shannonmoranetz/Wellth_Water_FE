import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogpaneComponent } from './logpane.component';

describe('LogpaneComponent', () => {
  let component: LogpaneComponent;
  let fixture: ComponentFixture<LogpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
