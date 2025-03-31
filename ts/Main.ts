document.addEventListener("DOMContentLoadend", () => {
    const form = document.getElementById("formAluno") as HTMLFormElement;
    const resultadoDiv = document.getElementById("resultado") as HTMLDivElement;
    const btnCadastrar = document.getElementById("btnCadastrar") as HTMLButtonElement;
    const btnCalcular = document.getElementById("btnCalcular") as HTMLButtonElement;

    let aluno: escola.Aluno | null = null;

    btnCadastrar.addEventListener("click", () => {
        const nome = (document.getElementById("nome") as HTMLInputElement).value;
        const anoNasc = Number((document.getElementById("anoNasc") as HTMLInputElement).value);
        const cpf = (document.getElementById("cpf") as HTMLInputElement).value;
        const endereco = (document.getElementById("endereco") as HTMLInputElement).value;
        const telefone = (document.getElementById("telefone") as HTMLInputElement).value;
        const matricula = Number((document.getElementById("matricula") as HTMLInputElement).value);
        const curso = (document.getElementById("curso") as HTMLInputElement).value;
        const escolaNome = (document.getElementById("escolaNome") as HTMLInputElement).value;

        const notas = [
            Number((document.getElementById("nota1") as HTMLInputElement).value),
            Number((document.getElementById("nota2") as HTMLInputElement).value),
            Number((document.getElementById("nota3") as HTMLInputElement).value),
            Number((document.getElementById("nota4") as HTMLInputElement).value),
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
            resultadoDiv.innerHTML += `<p><strong>Média Final:</strong> $(media.toFixed(2))</p>`
        } else {
            alert("Cadastre um aluno primeiro!");
        }
    });
})  