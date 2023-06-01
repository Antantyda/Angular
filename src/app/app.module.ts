import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {LunchComponent} from './lunch/containers/lunch.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {LunchService} from "./lunch/services/lunch.service";
import {UserService} from "./lunch/services/user.service";
import { TableComponent } from './lunch/components/table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    LunchComponent,
    TableComponent,
  ],
    imports: [
        FormsModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatSlideToggleModule,
        MatButtonToggleModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatTableModule
    ],
  providers: [
    LunchService,
    UserService
  ],
  bootstrap: [AppComponent],
  exports: [
    TableComponent
  ]
})
export class AppModule {

}
