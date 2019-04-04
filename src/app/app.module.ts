import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserpaneComponent } from './userpane/userpane.component';
import { LogpaneComponent } from './logpane/logpane.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpaneComponent,
    LogpaneComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
