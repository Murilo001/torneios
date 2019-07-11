import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface TransienteUsuario {
  nome: string;
  idade: Date;
}

interface ApiUsuario {
  id: number;
  nome: string;
  idade: unknown;
  ativo: 1 | 0;
}

export interface Usuario extends ApiUsuario {
  idade: Date;
}

const base = "//localhost:3000";

@Injectable({
  providedIn: "root"
})
export class UsuariosApiService {
  constructor(private _http: HttpClient) {}

  encontrarTodos(): Promise<Usuario[]> {
    return this._http
      .get<ApiUsuario[]>(`${base}/usuario`)
      .toPromise()
      .then(us => us.map(u => ({ ...u, idade: new Date(String(u.idade)) })));
  }

  encontrarPorId(id: number): Promise<Usuario> {
    return Promise.reject();
  }

  cadastrar(usuario: TransienteUsuario): Promise<Usuario> {
    return Promise.reject();
  }

  atualizar(id: number, usuario: TransienteUsuario): Promise<Usuario> {
    return Promise.reject();
  }

  apagar(id: number): Promise<unknown> {
    return Promise.reject();
  }
}
