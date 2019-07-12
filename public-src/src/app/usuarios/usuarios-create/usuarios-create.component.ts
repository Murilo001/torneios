import { Component, OnInit } from "@angular/core";
import { TransienteUsuario } from "../usuarios-api.service";

@Component({
  selector: "app-usuarios-create",
  templateUrl: "./usuarios-create.component.html",
  styleUrls: ["./usuarios-create.component.scss"]
})
export class UsuariosCreateComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  salvar(usuario: TransienteUsuario) {}
}
