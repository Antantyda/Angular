import {NgModule} from "@angular/core";
import {LayoutComponent} from "./components/layout.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {}
