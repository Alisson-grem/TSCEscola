"use strict";
var escola;
(function (escola) {
    class Pessoa {
        constructor(_nome, _anoNasc, _cpf, _endereco, _telefone) {
            this._nome = _nome;
            this._anoNasc = _anoNasc;
            this._cpf = _cpf;
            this._endereco = _endereco;
            this._telefone = _telefone;
        }
        get nome() {
            return this._nome;
        }
        set nome(value) {
            this._nome = value;
        }
        calcularIdade(anoAtual) {
            return anoAtual - this._anoNasc;
        }
        get cpf() {
            return this._cpf;
        }
        set cpf(value) {
            this._cpf = value;
        }
        get endereco() {
            return this._endereco;
        }
        set endereco(value) {
            this._endereco = value;
        }
        get telefone() {
            return this._telefone;
        }
        set telefone(value) {
            this._telefone;
        }
    }
    escola.Pessoa = Pessoa;
})(escola || (escola = {}));
