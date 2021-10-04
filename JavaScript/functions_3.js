// Função é um liquidificador

//fazerSuco é a função, a ação que você quer realizar
//Para realizar a ação, você precisa de frutas - os parâmetros
//dentro da função, você 'explica' o que signifca fazer o suco - nesse caso, somar a fruta1 à fruta 2, e de return terá essa soma.
//para receber a função, o suco, é preciso uma variável, nesse caso CONST COPO, que é igual à essa ação fazerSuco.

//para vizualizar os componentes do copo, um console.log copo

function fazerSuco(fruta1, fruta2) {
    return 'suco de: ' + fruta1 + fruta2
}

const copo = fazerSuco('banana','maçã')

console.log(copo)