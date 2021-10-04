

//function scope

let subject

function createThought() {
    subject = 'Study'
    return subject
}

console.log(subject)
console.log(createThought())
console.log(subject)

//Antes, a variável ainda não é definida. Ao retornar a função, que cria o pensamento de estudar, a variável acaba recebendo um valor e esse valor agora é atribuido à ela
