import { Injectable } from '@angular/core';
import { Paciente } from './paciente.model';

@Injectable()

export class PacienteService {

  constructor() { }

  listarTodos() :Paciente[] {
    const pacientes = localStorage['pacientes'];
    return pacientes ? JSON.parse(pacientes) : []; /* Operador Terneiro */ 
  }

  cadastrar(paciente :Paciente) :void {
    const pacientes = this.listarTodos();
    paciente.id = new Date().getTime();
    pacientes.push(paciente);
    localStorage['pacientes'] = JSON.stringify(pacientes);
  }

  buscarPorId(id :number) :Paciente {
    const pacientes :Paciente[] = this.listarTodos();
    return pacientes.find(paciente => paciente.id === id);
  }

  atualizar(paciente: Paciente) :void {
    const pacientes :Paciente[] = this.listarTodos(); 
    pacientes.forEach((obj, index, objs)=> {
      if ( paciente.id === obj.id) {
        objs[index] = paciente;
      }
    });
    localStorage['pacientes'] = JSON.stringify(pacientes);
  }

  remover(id: number) :void {
    let pacientes :Paciente[] = this.listarTodos();
    pacientes = pacientes.filter(pacientes => pacientes.id !== id);
    localStorage['pacientes'] = JSON.stringify(pacientes);
  }

  desativar(id: number) :void {
    const pacientes :Paciente[] = this.listarTodos();
    pacientes.forEach((obj, index, objs)=>{
      if (id === obj.id) {
        if (objs[index].desativado){
          return
        }
        objs[index].desativado = !obj.desativado;
      }
    });
    localStorage['pacientes'] = JSON.stringify(pacientes);
  }

  alterarAtendido(id: number) :void {
    const pacientes :Paciente[] = this.listarTodos();
    pacientes.forEach((obj, index, objs)=>{
      if (id === obj.id) {
        objs[index].atendido = !obj.atendido;
      }
    });
    localStorage['pacientes'] = JSON.stringify(pacientes);
  }
}
