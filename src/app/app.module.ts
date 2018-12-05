import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppEntityComponent } from './domain/app-entity/app-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEntityComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
