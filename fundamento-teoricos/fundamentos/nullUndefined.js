// Null x Undefined

let valor // não inicializada
console.log(valor)
//Undefined: É o valor por padrão quando não é inicializada
console.log(valor2) // Ocorre um erro "is not defined" já que essa varialvel não foir declarada

valor = null // ausência de valor - não aponta para nenhum local de memoria
console.log(valor)
// console.log(valor.toString()) //Erro!-  Não é possivel acessar variaveis com o valor null ou undefined irá ocorror um erro TypeError

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)


/*
É importante, prestar atenção no conceito de referencia e valor.
Quando existe uma atribuição por valpor você fa uma cópia do valor e cada váriavel e constante 
tera o seu valor idependente.
E quando existe uma atribuição por referencia, você cria uma cópia do endereço de mémoria logo,
as variasveis ou as contantes apontam para o mesmo lugar. Ecaso, seja necessario que uma variavel
não aponte para nada é possivel atribuir o nulo e ao utilizar o null dessa forma, não é possivel
acessar nenhum membro, função ou atributo daquela variavel. 


*/