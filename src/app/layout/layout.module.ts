import {NgModule} from "@angular/core";
import {LayoutComponent} from "./components/layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterOutlet} from "@angular/router";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLink
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
