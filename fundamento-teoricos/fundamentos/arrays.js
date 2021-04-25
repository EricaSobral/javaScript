// Arrays

// O array é heterogenio e não possui tamanho fixo

const valores = [7.7, 8.9, 6.3, 9.2]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) // Soma a quantidade de elementos no array

valores.push({id: 3}, false, null, 'teste') // adiciona novos elementos no array
console.log(valores)

console.log(valores.pop()) // Retira o último elemento do array
delete valores[0] // Deleta o elemento o array 
console.log(valores)

console.log(typeof valores) // Mostra que em javacript o array é do tipo object