import { Component, OnInit } from '@angular/core';
import { Usuario, UsuariosApiService } from '../usuarios-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-listing',
  templateUrl: './usuarios-listing.component.html',
  styleUrls: ['./usuarios-listing.component.scss'],
})
export class UsuariosListingComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(
    private readonly _usuarioApiService: UsuariosApiService,
    private readonly _router: Router,
  ) {
  }

  ngOnInit() {
    this._loadListing();
  }

  apagar(id: number) {
    this._usuarioApiService.apagar(id).then(() => this._loadListing());
  }

  editar(id: number) {
    this._router.navigate(['/usuarios/edit', id]);
  }

  private _loadListing() {
    this._usuarioApiService.encontrarTodos().then(todos => {
      this.usuarios = todos;
    });
  }
}
