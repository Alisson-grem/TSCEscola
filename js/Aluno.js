"use strict";
var escola;
(function (escola_1) {
    class Aluno extends escola_1.Pessoa {
        get matricula() {
            return this._matricula;
        }
        set matricula(value) {
            this._matricula = value;
        }
        get curso() {
            return this._curso;
        }
        set curso(value) {
            this._curso = value;
        }
        get escolaNome() {
            return this._escola;
        }
        set escolaNome(value) {
            this._escola = value;
        }
        constructor(nome, anoNasc, cpf, endereco, telefone, matricula, curso, escola, notas) {
            super(nome, anoNasc, cpf, endereco, telefone);
            this._matricula = matricula;
            this._curso = curso;
            this._escola = escola;
            this._notas = notas;
        }
        calcularMedia() {
            const soma = this._notas.reduce((acc, nota) => acc = nota, 0);
            return soma / this._notas.length;
        }
    }
    escola_1.Aluno = Aluno;
})(escola || (escola = {}));
