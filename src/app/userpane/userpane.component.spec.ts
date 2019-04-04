import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpaneComponent } from './userpane.component';

describe('UserpaneComponent', () => {
  let component: UserpaneComponent;
  let fixture: ComponentFixture<UserpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
