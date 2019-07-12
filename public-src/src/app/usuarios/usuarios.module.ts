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
  MatIconModule,
  MatNativeDateModule
} from "@angular/material";
import { UsuariosListingComponent } from "./usuarios-listing/usuarios-listing.component";
import { UsuarioRoutingModule } from "./usuarios-routing.module";
import { UsuariosApiService } from "./usuarios-api.service";
import { UsuariosCreateComponent } from "./usuarios-create/usuarios-create.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    RouterModule,
    FormsModule,
    MatNativeDateModule,
    ReactiveFormsModule,

    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    UsuariosFormComponent,
    UsuariosListingComponent,
    UsuariosCreateComponent
  ]
})
export class UsuariosModule {}
