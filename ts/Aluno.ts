namespace escola {
    export class Aluno extends Pessoa {
        private _matricula: number;
        private _curso: string;
        private _escola: string;
        private _notas: number[];

        get matricula(): number {
            return this._matricula;
        }

        set matricula(value: number) {
            this._matricula = value;
        }

        get curso(): string {
            return this._curso;
        }

        set curso(value: string) {
            this._curso = value;
        }

        get escolaNome(): string {
            return this._escola;
        }

        set escolaNome(value: string) {
            this._escola = value;
        }

        constructor(nome: string, anoNasc: number, cpf: string, endereco: string, telefone: string, matricula: number, curso: string, escola: string, notas: number[]) {
            super(nome, anoNasc, cpf, endereco, telefone);
            this._matricula = matricula;
            this._curso = curso;
            this._escola = escola;
            this._notas = notas;
        }

        calcularMedia(): number {
            const soma = this._notas.reduce((acc, nota) => acc = nota, 0);
            return soma / this._notas.length;
        }
    }
}