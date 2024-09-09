let proximoId = 1

function adicionarLinha(){
    const nome = document.getElementById("nome").value;
    const idade = document.getElementById("idade").value;
    const admissao = document.getElementById("admissao").value;
    const demissao = document.getElementById("demissao").value;
}
//Se for preenchido vazio
if(nome === ' ' || idade === ' ' || admissao === ' '){
    alert("Preencha os valores do formulário!")
}

const tabela = document.getElementById|("tabelaDados").getElementById('tbody')[0];

//Inserindo uma nova linha
const novaLinha =tabela.insertRow

//Inserindo os valores da linha 
const celId = novaLinha.insertCel(0);
const celNome = novaLinha.insertCel(1);
const celIdade = novaLinha.insertCel(2);
const celAdmissao = novaLinha.insertCel(3);
const celDemissao = novaLinha.insertCel(4);

//Inserindo valores dentro das celulas
celId.innerHTML = proximoId;
celNome.innerHTML = nome;
celIdade.innerHTML = idade;
celAdmissao.innerHTML = admissao;
celDemissao.innerHTML = demissao;

proximoId++;

//Limpar formulário
document.getElementById("linhaForm").requestFullscreen();