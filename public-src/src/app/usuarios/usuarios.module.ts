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
import { RouterModule } from "@angular/router";
import { UsuariosListingComponent } from "./usuarios-listing/usuarios-listing.component";

@NgModule({
  declarations: [UsuariosFormComponent, UsuariosListingComponent],
  imports: [
    CommonModule,

    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule
  ]
})
export class UsuariosModule {}
