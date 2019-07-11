import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuariosFormComponent } from "./usuarios-form/usuarios-form.component";
import {
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatButtonModule
} from "@angular/material";
import { UsuariosListingComponent } from "./usuarios-listing/usuarios-listing.component";
import { UsuarioRoutingModule } from "./usuarios-routing.module";

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,

    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  declarations: [UsuariosFormComponent, UsuariosListingComponent]
})
export class UsuariosModule {}
