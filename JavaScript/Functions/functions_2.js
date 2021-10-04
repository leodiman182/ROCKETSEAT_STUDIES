// function expression
// function anonymous

// parâmetros - parameteres
const sum = function (number1, number2){  
     total = number1 + number2
     return total
}

let number1 = 34
let number2 = 25
sum (number1, number2) // Arguments - argumentos

console.log(`O número 1 é ${number1} `)
console.log(`O número 2 é ${number2} `)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)




// Função é um "liquidificador" ------------------------------------

function fazerSuco(fruta1, fruta2){
    return fruta1 + fruta2
}

const copo = fazerSuco('banana', 'maçã')
console.log(copo)



// Function scope

let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject)
console.log(createThink(subject))


