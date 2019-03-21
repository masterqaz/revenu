import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MylibModule } from '../../projects/mylib/src/lib/mylib.module'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MylibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
