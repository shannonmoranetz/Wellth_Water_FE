import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { UserpaneComponent } from './userpane.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

describe('UserpaneComponent', () => {
  let component: UserpaneComponent;
  let fixture: ComponentFixture<UserpaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpaneComponent ],
      imports: [ FormsModule, HttpClientTestingModule, FontAwesomeModule ]
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
