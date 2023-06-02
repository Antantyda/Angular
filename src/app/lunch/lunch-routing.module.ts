import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LunchComponent} from "./containers/lunch.component";
import {LunchHomeComponent} from "./containers/home/lunch-home.component";

const routes: Routes = [
  {
    path: '',
    component: LunchHomeComponent,
  },
  {
    path: 'create',
    component: LunchComponent,
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class LunchRoutingModule {}
