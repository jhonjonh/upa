import { Component, OnInit } from '@angular/core';
import { PacienteService, Paciente } from '../shared';

@Component({
  selector: 'app-listar-paciente',
  templateUrl: './listar-paciente.component.html',
  styleUrls: ['./listar-paciente.component.css']
})
export class ListarPacienteComponent implements OnInit {

  pacientes: Paciente[];

  constructor(private pacienteService : PacienteService) { }

  ngOnInit() {
    this.pacientes = this.listarTodos();
  }
  listarTodos() : Paciente[]{
    return this.pacienteService.listarTodos();
  }

  desativar(paciente:Paciente) : void {
    if(confirm('Deseja excluir o paciente " '+ paciente.nome +' "? Essa ação não pode ser desfeita. ')){
      this.pacienteService.desativar(paciente.id);
      this.pacientes = this.listarTodos();
    } else {
      this.pacientes = this.listarTodos();
    }
  }

  alterarAtendido(paciente:Paciente) : void {
    if(confirm('Deseja alterar o status de atendimento do paciente " '+ paciente.nome +' "? ')){
      this.pacienteService.alterarAtendido(paciente.id);
      this.pacientes = this.listarTodos();
    } else {
      this.pacientes = this.listarTodos();
    }
  }

}
