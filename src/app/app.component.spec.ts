import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { UserpaneComponent } from './userpane/userpane.component';
import { LogpaneComponent } from './logpane/logpane.component';
import { ScrollboxComponent } from './scrollbox/scrollbox.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        UserpaneComponent,
        LogpaneComponent,
        ScrollboxComponent
      ],
      imports: [ HttpClientTestingModule ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
