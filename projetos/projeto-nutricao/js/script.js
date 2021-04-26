let titulo = document.querySelector(".titulo")

titulo.textContent = "Nutricionista Aparecida"

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++ ){
    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var tdAltura = paciente.querySelector(".info-altura");

    var tdImc = paciente.querySelector(".info-imc");

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;

    var alturaEhValida = true;
    var pesoEhValido = true;

    if(peso <= 0 || peso >= 1000){
        console.log("Peso inválido");
        tdImc.textContent = "Peso inválido!";
        pesoEhValido = false;
        paciente.classList.add("paciente-invalido")
    }

    if(altura <= 0 || altura >= 3.0){
        console.log("Altura inválida");
        tdImc.textContent = "Altura inválida!";
        alturaEhValida = false;
        paciente.classList.add("paciente-invalido")    
    }

    if(pesoEhValido && alturaEhValida){
        var imc = peso / ( altura * altura);    
        tdImc.textContent = imc.toFixed(2);
    } 
    
    
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

 // Selecionando form  
    var form = document.querySelector("#form-adiciona");
  
 // Acessando cada input dentro do form
 var nome = form.nome.value;
 var peso = form.peso.value;
 var altura = form.altura.value;
 var gordura = form.gordura.value;


// Criando o elemento tr
    var pacienteTr = document.createElement("tr");

// Criando as tds
    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

// Inserindo os valores do Form nas Tds
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;

// Inserindo as tds dentro da Tr
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

// Inserindo a TR na tabela

var tabela = document.querySelector("#tabela-pacientes");

tabela.appendChild(pacienteTr);
});