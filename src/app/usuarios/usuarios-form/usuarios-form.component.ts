import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TransienteUsuario } from '../usuarios-api.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.scss'],
})
export class UsuariosFormComponent implements OnInit {

  @Input() initial?: Readonly<TransienteUsuario>;

  @Output() conclude = new EventEmitter<TransienteUsuario>();

  readonly formGroup: FormGroup;

  constructor(private readonly _formBuilder: FormBuilder) {
    this.formGroup = this._buildFormGroup();
  }

  ngOnInit() {
    const { initial } = this;

    if (initial) {
      this.formGroup.setValue({
        nome: initial.nome,
        idade: initial.idade,
      });
    }
  }

  submitForm() {
    this.conclude.emit(this.formGroup.value);
  }

  private _buildFormGroup() {
    return this._formBuilder.group({
      nome: [],
      idade: [],
    });
  }
}
