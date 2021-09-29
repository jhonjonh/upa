import { Routes } from '@angular/router';
import { CadastrarPacienteComponent } from '.';
import { ListarPacienteComponent } from './listar';

export const PacienteRoutes: Routes = [
    { 
        path:'pacientes',
        redirectTo: 'pacientes/listar'
    }, 
    { 
        path:'pacientes/listar',
        component: ListarPacienteComponent
    },
    {
        path:'pacientes/cadastrar',
        component: CadastrarPacienteComponent
    }
];