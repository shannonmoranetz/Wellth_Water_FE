import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ScrollboxComponent } from './scrollbox.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('ScrollboxComponent', () => {
  let component: ScrollboxComponent;
  let fixture: ComponentFixture<ScrollboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollboxComponent ],
      imports: [HttpClientTestingModule, FontAwesomeModule]
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
