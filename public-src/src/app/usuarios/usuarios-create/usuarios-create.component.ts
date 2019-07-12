import { Component, OnInit } from "@angular/core";
import { TransienteUsuario, UsuariosApiService } from "../usuarios-api.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-usuarios-create",
  templateUrl: "./usuarios-create.component.html",
  styleUrls: ["./usuarios-create.component.scss"]
})
export class UsuariosCreateComponent {
  constructor(
    private readonly _usuariosApi: UsuariosApiService,
    private readonly _router: Router
  ) {}

  salvar(usuario: TransienteUsuario) {
    this._usuariosApi
      .cadastrar(usuario)
      .then(() => this._router.navigate(["/", "usuarios"]));
  }
}
