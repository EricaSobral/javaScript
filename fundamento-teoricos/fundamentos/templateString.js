// Template String
// São envolvidas por (acentos graves) (` `) em vez de aspas simples ou duplas. Estes são indicados por um cifrão seguido de chaves (${expression}).
const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
 
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)