import { Injectable } from "@angular/core";

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

@Injectable({
  providedIn: "root"
})
export class UsuariosApiService {
  constructor() {}

  encontrarTodos(): Promise<Usuario[]> {
    return Promise.reject();
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
