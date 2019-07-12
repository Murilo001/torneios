import { Component, OnInit } from "@angular/core";
import { Usuario, UsuariosApiService } from "../usuarios-api.service";

@Component({
  selector: "app-usuarios-listing",
  templateUrl: "./usuarios-listing.component.html",
  styleUrls: ["./usuarios-listing.component.scss"]
})
export class UsuariosListingComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(private readonly _usuarioApiService: UsuariosApiService) {}

  ngOnInit() {
    this._loadListing();
  }

  apagar(id: number) {
    this._usuarioApiService.apagar(id).then(() => this._loadListing());
  }

  private _loadListing() {
    this._usuarioApiService.encontrarTodos().then(todos => {
      this.usuarios = todos;
    });
  }
}
