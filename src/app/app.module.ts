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
import { SearchComponent } from './search/search.component';
// Album and Aritst components need to be generated

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  // { path: 'artists/:id', component: ArtistComponent },
  // { path: 'tracks/:id', component: TrackComponent },
  // { path: 'albums/:id', component: AlbumComponent },
];


// The stuff below is generated stuff, not shown in the book solution as of p205.
@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
