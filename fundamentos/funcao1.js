// Funções 1

// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // Ao passar apenas um valor para a função imprimirSoma, o segundo parametro sera undefined e o resultado será NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) // O resto dos números será ignorado
imprimirSoma() // Ao não passar parametros o resultado será NaN 

// Funcao com retorno
function soma(a, b = 1) { 
    return a + b
}
// É necessario retornar o valor a resposta da chamada dessa função então se usa o console.log
console.log(soma(2, 3))
console.log(soma(2))
console.log(soma())

/*
Em geraal, uma função é um bloco de código nomeado que recebo parametros de entra e executa o algoritmo que no final retorna um valor.
Mas, existem funções diferentes que não possuem um nome, ou não tem um retono etc 
*/