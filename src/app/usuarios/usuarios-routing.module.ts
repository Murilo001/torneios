import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsuariosListingComponent } from './usuarios-listing/usuarios-listing.component';
import { UsuariosCreateComponent } from './usuarios-create/usuarios-create.component';
import { UsuariosEditComponent } from './usuarios-edit/usuarios-edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'usuarios', component: UsuariosListingComponent },
      { path: 'usuarios/create', component: UsuariosCreateComponent },
      { path: 'usuarios/edit/:id', component: UsuariosEditComponent },
    ]),
  ],
})
export class UsuarioRoutingModule {}
