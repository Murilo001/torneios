import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { TransienteUsuario } from "../usuarios-api.service";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-usuarios-form",
  templateUrl: "./usuarios-form.component.html",
  styleUrls: ["./usuarios-form.component.scss"]
})
export class UsuariosFormComponent implements OnInit {
  @Input() inital?: TransienteUsuario;

  @Output() submit = new EventEmitter<TransienteUsuario>();

  readonly formGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.formGroup = this._buildFormGroup();
  }

  ngOnInit() {
    if (this.inital) {
      this.formGroup.setValue(this.inital);
    }
  }

  submitForm() {
    this.submit.emit(this.formGroup.value);
  }

  private _buildFormGroup() {
    return this._formBuilder.group({
      nome: [],
      idade: []
    });
  }
}
