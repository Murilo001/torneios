import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransienteUsuario, Usuario, UsuariosApiService } from '../usuarios-api.service';
import { MatSnackBar } from '@angular/material';

const duration = 5000;

@Component({
  selector: 'app-usuarios-edit',
  templateUrl: './usuarios-edit.component.html',
  styleUrls: ['./usuarios-edit.component.scss'],
})
export class UsuariosEditComponent implements OnInit {

  private id!: number;

  usuario?: Usuario;

  constructor(
    private readonly _activatedRoute: ActivatedRoute,
    private readonly _usuariosApiService: UsuariosApiService,
    private readonly _snackBar: MatSnackBar,
    private readonly _router: Router,
  ) {
  }

  ngOnInit() {
    this.id = Number(this._activatedRoute.snapshot.paramMap.get('id'));

    if (!this.id) {
      throw Error('ID de usuário inválido');
    }

    this._usuariosApiService.encontrarPorId(this.id).then(usuario => {
      this.usuario = usuario;
    });
  }

  editar(usuario: TransienteUsuario) {
    this._usuariosApiService
      .atualizar(this.id, {
        ...this.usuario,
        ...usuario,
      })
      .then(() => this._router.navigate(['/usuarios']))
      .then(() => this._snackBar.open(
        'Usuário atualizado com sucesso', undefined, { duration },
      ))
      .catch(e => (console.error(e), this._snackBar.open(`Erro ao atualizar usuário: ${e.error}`)));
  }

}
