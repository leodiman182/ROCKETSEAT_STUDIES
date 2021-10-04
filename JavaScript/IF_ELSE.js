// CONTROL FLOW

// ALTERAR O SENTIDO 'CACHOEIRA' NATURAL DO JAVASCRIPT




/*
    IF - ELSE
    Condicional
*/

let temperature = 37.2
/*
if(temperature >= 37.5) {
    console.log('Está com muita febre')
} else if(temperature < 37.5 && temperature >= 37) {
    console.log('está com febre')
} else {
    console.log('não está com febre')
}
*/

// É POSSÍVEL USAR MAIS DE UM IF/ELSE EM SEQUÊNCIA!!!
// múltiplas condicionais!!

// IF COM APENAS UMA LINHA DE CÓDIGO, PODE USAR SEM A PARTE DO BLOCO, MAS NÃO É RECOMENDADO![]

// DICA: ATRIBUIR AS VARIÁVEIS!

let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(highTemperature) {
    console.log('Está com muita febre')
} else if(mediumTemperature) {
    console.log('está com febre')
} else {
    console.log('não está com febre')
}