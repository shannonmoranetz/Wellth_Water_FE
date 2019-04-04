import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollboxComponent } from './scrollbox.component';

describe('ScrollboxComponent', () => {
  let component: ScrollboxComponent;
  let fixture: ComponentFixture<ScrollboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
