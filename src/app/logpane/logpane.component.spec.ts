import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { LogpaneComponent } from './logpane.component';
import { ScrollboxComponent } from '../scrollbox/scrollbox.component';

describe('LogpaneComponent', () => {
  let component: LogpaneComponent;
  let fixture: ComponentFixture<LogpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogpaneComponent, ScrollboxComponent ],
      imports: [HttpClientTestingModule]
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
