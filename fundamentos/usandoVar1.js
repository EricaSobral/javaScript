// Usando Var - 1

{ 
    { 
        { 
            { 
                var sera = 'Será???'
                console.log(sera)
            }
        }
    }
}

console.log(sera) // Nesse exemplo, a variavel var será será acessivel

function teste() {
    var local = 123
    console.log(local)
}

teste()
console.log(local)

/*
Escopo: É o local onde a variavel é visivel/acessivel

Quando se define uma variável dentro da função o escopo dessa variável é acessivel apenas dentro da 
função.


*/