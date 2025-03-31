namespace escola{
    export class Pessoa {
        constructor(
            private _nome: string,
            private _anoNasc: number,
            private _cpf: string,
            private _endereco: string,
            private _telefone: string,
        ) {}

        get nome():string{
            return this._nome;
        }
        set nome(value: string) {
            this._nome = value;
        }

        calcularIdade(anoAtual: number): number {
            return anoAtual - this._anoNasc;
        }

        get cpf():string{
            return this._cpf;
        }

        set cpf(value:string){
            this._cpf = value;
        }

        get endereco():string{
            return this._endereco;
        }

        set endereco(value:string){
            this._endereco = value;
        }

        get telefone():string{
            return this._telefone;
        }

        set telefone(value:string){
            this._telefone;
        }


    }
}