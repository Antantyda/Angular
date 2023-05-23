import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from '../app.component';
import {HousingListComponent} from './housing-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class HousingModule {
}
