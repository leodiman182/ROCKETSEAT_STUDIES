// CONTROL FLOW


// SWITCH

/*
let expression = 'a'

switch (expression) {
    case 'a':
        // código
        console.log('a')        
    case 'b':
        // código
        console.log('b')
        break
    default:
        console.log('default')
        break
}

SEM O BREAK, O PROGRAMA SEGUE EXECUTANDO A FUNÇÃO ATÉ  ENCONTRAR UM.
*/

//  CALCULADORA

function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case '+':
            result = number1 + number2
            break
        case '-':
            result = number1 - number2
            break
        case '*':
            result = number1 * number2
            break
        case '/':
            result = number1 / number2
            break
        default:
            console.log('Não implementado')
            break
    }

    return result
}

console.log(calculate(4, '*', 8))

