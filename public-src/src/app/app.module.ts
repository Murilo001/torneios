import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {
  MatToolbarModule,
  MatSidenavModule,
  MatMenuModule,
  MatButtonModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { RouterModule } from "@angular/router";
import { UsuariosModule } from "./usuarios/usuarios.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,

    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,

    UsuariosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
