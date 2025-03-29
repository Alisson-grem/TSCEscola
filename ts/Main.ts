namespace escola{

    const CadastrodeAluno = document.getElementById("cadastro") as HTMLButtonElement;

    const campoNome = document.getElementById("nome") as HTMLInputElement;
    const campoAno = document.getElementById("ano") as HTMLInputElement;
    const campoCPF = document.getElementById("cpf") as HTMLInputElement;
    const campoEnd = document.getElementById("endereco") as HTMLInputElement;
    const campoTel = document.getElementById("telefone") as HTMLInputElement;
    const campoMatr = document.getElementById("matricula") as HTMLInputElement;
    const campoCurso = document.getElementById("curso") as HTMLInputElement;
    const campoEscola = document.getElementById("escola") as HTMLInputElement;
    
    const campoNota1 = document.getElementById("nota1") as HTMLInputElement;
    const campoNota2 = document.getElementById("nota2") as HTMLInputElement;
    const campoNota3 = document.getElementById("nota3") as HTMLInputElement;
    const campoNota4 = document.getElementById("nota4") as HTMLInputElement;

    const CalcularMedia = document.getElementById("calcular") as HTMLButtonElement;

    let p: Pessoa;

    CadastrodeAluno.addEventListener("click", ()=>{
        p = new Pessoa(parseInt(campoMatr.value));
        p.nome = campoNome.value;
        p.ano = campoAno.value;
        p.cpf = campoCPF.value;
        p.endereco = campoEnd.value;
        p.telefone = campoTel.value;
        p.curso = campoCurso.value;
        p.escola = campoEscola.value;

        document.getElementById("nome").textContent = p.nome;
        document.getElementById("ano").textContent = p.ano;
        document.getElementById("cpf").textContent = p.cpf;
        document.getElementById("endereco").textContent = p.endereco;
        document.getElementById("telefone").textContent = p.telefone;
        document.getElementById("matricula").textContent = p.matricula;
        document.getElementById("curso").textContent = p.curso;
        document.getElementById("escola").textContent = p.escola;

    });

    CalcularMedia.addEventListener("click", ()=>{
        p.
    })
}