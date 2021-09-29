import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacienteService } from './shared';
import { ListarPacienteComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarPacienteComponent } from './cadastrar';


@NgModule({
  declarations: [
    ListarPacienteComponent,
    CadastrarPacienteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    PacienteService
  ]
})
export class PacientesModule { }
