import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsuariosListingComponent } from "./usuarios-listing/usuarios-listing.component";
import { UsuariosCreateComponent } from "./usuarios-create/usuarios-create.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: "usuarios", component: UsuariosListingComponent },
      { path: "usuarios/create", component: UsuariosCreateComponent }
    ])
  ]
})
export class UsuarioRoutingModule {}
