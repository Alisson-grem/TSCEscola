"use strict";
document.addEventListener("DOMContentLoadend", () => {
    const form = document.getElementById("formAluno");
    const resultadoDiv = document.getElementById("resultado");
    const btnCadastrar = document.getElementById("btnCadastrar");
    const btnCalcular = document.getElementById("btnCalcular");
    let aluno = null;
    btnCadastrar.addEventListener("click", () => {
        const nome = document.getElementById("nome").value;
        const anoNasc = Number(document.getElementById("anoNasc").value);
        const cpf = document.getElementById("cpf").value;
        const endereco = document.getElementById("endereco").value;
        const telefone = document.getElementById("telefone").value;
        const matricula = Number(document.getElementById("matricula").value);
        const curso = document.getElementById("curso").value;
        const escolaNome = document.getElementById("escolaNome").value;
        const notas = [
            Number(document.getElementById("nota1").value),
            Number(document.getElementById("nota2").value),
            Number(document.getElementById("nota3").value),
            Number(document.getElementById("nota4").value),
        ];
        aluno = new escola.Aluno(nome, anoNasc, cpf, endereco, telefone, matricula, curso, escolaNome, notas);
        resultadoDiv.innerHTML = `<p><strong>Aluno cadastro:</strong> ${aluno.nome}</p>,
        <p><strong>Ano de Nascimento:</strong> ${aluno.calcularIdade(new Date().getFullYear())} Anos </p>,
        <p><strong>CPF: </strong> ${aluno.cpf}</p>,
        <p><strong>Endereço: </strong> ${aluno.cpf}</p>,
        <p><strong>Número de Telefone:</strong> ${aluno.telefone}</p>,
        <p><strong>Número da Matrícula:</strong> ${aluno.matricula}</p>,
        <p><strong>Curso:</strong> ${aluno.curso}</p>,
        <p><strong>Nome da Escola:</strong> ${aluno.escolaNome}</p>`;
    });
    btnCalcular.addEventListener("click", () => {
        if (aluno) {
            const media = aluno.calcularMedia();
            resultadoDiv.innerHTML += `<p><strong>Média Final:</strong> $(media.toFixed(2))</p>`;
        }
        else {
            alert("Cadastre um aluno primeiro!");
        }
    });
});
