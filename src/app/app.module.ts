import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { UserpaneComponent } from './userpane/userpane.component';
import { LogpaneComponent } from './logpane/logpane.component';
import { ScrollboxComponent } from './scrollbox/scrollbox.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpaneComponent,
    LogpaneComponent,
    ScrollboxComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
