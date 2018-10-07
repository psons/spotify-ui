import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {
  RouterModule,
  Routes
} from '@angular/router';
import {LocationStrategy,
HashLocationStrategy,
APP_BASE_HREF
} from '@angular/common';

import { AppComponent } from './app.component';
// Album and Aritst components need to be generated

// The stuff below is generated stuff, not shown in the book solution as of p205.
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
