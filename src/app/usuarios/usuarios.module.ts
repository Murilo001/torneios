import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatNativeDateModule,
  MatSelectModule,
} from '@angular/material';
import { UsuariosListingComponent } from './usuarios-listing/usuarios-listing.component';
import { UsuarioRoutingModule } from './usuarios-routing.module';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';

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
    MatButtonModule,
    MatCardModule,
  ],
  declarations: [
    UsuariosFormComponent,
    UsuariosListingComponent,
    UsuariosCreateComponent,
    UsuariosEditComponent,
  ],
})
export class UsuariosModule {}
