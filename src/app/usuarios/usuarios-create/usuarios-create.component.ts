import { Component } from '@angular/core';
import { TransienteUsuario, UsuariosApiService } from '../usuarios-api.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

const snackBarTime = 5000;

@Component({
  selector: 'app-usuarios-create',
  templateUrl: './usuarios-create.component.html',
  styleUrls: ['./usuarios-create.component.scss'],
})
export class UsuariosCreateComponent {
  constructor(
    private readonly _usuariosApi: UsuariosApiService,
    private readonly _router: Router,
    private readonly _snackBar: MatSnackBar,
  ) {}

  salvar(usuario: TransienteUsuario) {
    this._usuariosApi
      .cadastrar(usuario)
      .then(() => this._router.navigate(['/', 'usuarios']))
      .then(() => this._snackBar.open('Usuário cadastrado com sucesso', undefined, { duration: snackBarTime }))
      .catch(e => this._snackBar.open(`Erro ao cadastrar: ${e.error}`, undefined, { duration: snackBarTime }));
  }
}
