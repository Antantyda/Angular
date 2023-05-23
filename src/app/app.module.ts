import {NgModule} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import {HousingModule} from "./housing-list/housing.module";
import {AppComponent} from "./app.component";


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HousingModule
  ],
  providers: [],

  bootstrap: [AppComponent]

})
export class AppModule {
}
