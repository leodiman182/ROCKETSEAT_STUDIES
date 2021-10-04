// function expression
// function anonymous

//paarâmetros - parameters - da função

/*
sum(2, 3) // arguments - argumentos (2=number1, 3=number2 na função chamada de SUM)

sum(4, 5)
sum(56, 234234)
*/

let total = 0

const sum = function(number1, number2) {
    let total = number1 + number2
    return total
}

//return é importante na função
//o let total dentro da função é independente e não tem relação com o let total de fora!

let number1 = 34
let number2 = 25

sum(number1, number2)

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)

console.log(`A soma desses números é ${sum(number1,number2)}`)
console.log(total)


