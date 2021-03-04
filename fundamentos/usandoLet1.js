// Let - 1

let numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)

/* 
A principal diferença entre var e let é que:

Var: Tem escopo global e tem escopo de função
Let: Tem escopo global, escopo de função e escopo de bloco 
*/