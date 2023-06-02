import {NgModule} from "@angular/core";
import {LunchComponent} from "./containers/lunch.component";
import {LunchRoutingModule} from "./lunch-routing.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TableComponent} from "./components/table/table.component";
import {LunchService} from "./services/lunch.service";
import {UserService} from "./services/user.service";
import {LunchHomeComponent} from "./containers/home/lunch-home.component";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    LunchComponent,
    TableComponent,
    LunchHomeComponent
  ],
  providers: [
    LunchService,
    UserService
  ],
    imports: [
        CommonModule,
        LunchRoutingModule,
        MatSidenavModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
    ]
})
export class LunchModule {}
