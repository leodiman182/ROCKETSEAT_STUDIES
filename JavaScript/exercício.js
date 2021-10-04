// Declare uma variável de nome weight

//let weight;

// Que tipo de dado é a variável acima?

//console.log(typeof weight) // resposta:undefined

/*
    3. Declare uma variável e atribua valores para um dos dados:
        * name: String
        * age: Number (interger) inteiro
        * stars : Number (float) "quebrado"
        * isSubscribed: Boolean
*/

//let name = "Leo"
//let age = 26
//let stars = 4.8
//let isSubscribed = true 



/*
    4. A variável student abaixo é de que tipo de dado?

        console.log(typeof student)

    4.1. Atribua a ela as mesmas propriedades e valores do exercício 3.

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg
*/

let student = {
        name: "Leela",
        age: 26,
        peso: 74.9,
        isSubscribed: false
}

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)


/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/

let student = []


/*
    6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
*/

students = [
    student
]

console.log(students)

/*
    7. Coloque no console o valor da posição zero do Array acima
*/ 

console.log(students[0])

/*
    8. Crie um novo student e coloque na posição do Array students
*/ 

const John = {
    name: "John",
    age: 26,
    weight: 94.5,
    isSubscribed: true,
}

students[1] = John

// ou

students = [
    student,
    John
]

console.log(students)


/*
    9. Sem rodar o código responda qual é a resposta do código abaixo e por quê?
    Após sua resposta, rode o código e veja se acertou.
*/

console.log(a)
var a = 1

// undefined por conta do hoisting...
// por conta do valor global, se entende que var = a antes de ser atribuido o valor 1, portanto antes ainda é undefined