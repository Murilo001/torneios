import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UsuariosFormComponent } from "./usuarios-form/usuarios-form.component";
import {
  MatSelectModule,
  MatInputModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatButtonModule,
  MatListModule,
  MatIconModule
} from "@angular/material";
import { UsuariosListingComponent } from "./usuarios-listing/usuarios-listing.component";
import { UsuarioRoutingModule } from "./usuarios-routing.module";
import { UsuariosApiService } from "./usuarios-api.service";

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,

    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [UsuariosFormComponent, UsuariosListingComponent],
})
export class UsuariosModule {}
