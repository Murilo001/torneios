import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsuariosListingComponent } from "./usuarios-listing/usuarios-listing.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "usuarios", component: UsuariosListingComponent }
    ])
  ]
})
export class UsuarioRoutingModule {}
