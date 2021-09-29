export class Paciente{

    constructor(
        public id?:number,
        public nome?:string,
        public cpf?:string,
        public desativado?:boolean,
        public atendido?:boolean
    ) {

    }
}