import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LayoutComponent} from "./layout/components/layout.component";
import {TestPageComponent} from "./test-page/test-page.component";

const routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'test', component: TestPageComponent},
      {
        path: 'obed',
        loadChildren: () => import('./lunch/lunch.module').then(m => m.LunchModule)
      }
    ]
  },
]

@NgModule({
 imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

