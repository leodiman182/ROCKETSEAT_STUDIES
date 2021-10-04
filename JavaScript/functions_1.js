// Declarando variáveis

//var call

//assignment ou atribuição de valores

//call = "Leo"

//tipo de dado

//console.log(typeof call)


//outras variáveis

//let age = 18
//let isHuman = true

//agrupando
//let age, isHuman

//age = 26
//isHuman = true

//múltiplos argumentos da função
//console.log(call, age, isHuman)

//console.log('O ' + call + ' tem ' + age + ' anos')

// concatenando valores - ' + name + '  <------

// Interpolando valores com template literals

//console.log(`o ${call} tem ${age} anos`)

// (` testando o ${valor}`)

// Objects

//const person = {
//    name: 'Leo',
//    age: 26,
//    weight:89.9,
//    isAdmin:true
//}

//console.log(person.name)

//console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} kg.`)


//Array

//const animals = [
//string    'Lion',
//string    'Monkey',
//object    {
//     name: 'Cat',
//     age: 3    
//}
//]

//acessar valores dentro de um Array, inclusive objetos - {} ---------- começando do 0, 1, 2..

//console.log(animals[2].name)

//quantidade de valores dentro da array []

//console.log(animals.length)


//Exercícios -------------------------

//1. Declare uma variável de nome weight

//let weight;

//2. Que tipo de dado é a variável acima?

//console.log(typeof weight)

/*
    3.Declare uma variável e atribua valores para cada um dos dados:
    name: string
    age: number (integer)
    stars: number (float)
    isSubscribed: boolean
*/

//let name = 'Leo'
//let age = 26
//let stars = 4.5
//let isSubscribed = true

/*
    4.A variável student abaixo é de que tipo de dados?
    4.1 Atribua a ela as mesmas propriedadeds e valores do exercício 3

    4.2 Mostre no console a seguinte mensagem:

    <name> de idade <age> tem <stars> estrelas!

*/

/*
let student = {
    name: 'Leo',
    age: 26,
    stars: 4.9,
    isSubscribed: true
}
*/


/*console.log(
    `${student.name} de idade ${student.age} anos tem ${student.stars} estrelas!`
)


console.log(typeof student)

*/

/*
    5. Declare uma variável do tipo Array, de nome students e atribua a ela nenhum valor, ou seja, somente o Array vazio

*/

//let students = []

/*
    6.Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4
*/

/* 
students = [
    student
]
*/

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

//console.log(students[0])


/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

/*

Criando a variável de novo student -

const john = {
    name: 'John',
    age: 35,
    stars: 3.5,
    isSubscribed: true
}

Para atribuir

students = [
    student,
    john
]

ou

students[1] = john

console.log(students[1])
*/


//---------------------------------------------------------------------------------------------

/*
    Aprendendo - Funções

    Tipo de dado ESTRUTURAL

    Criar um aplicativo de frases motivacionais
*/

    console.log('Estudar é muito bom')
    console.log('Em breve, você estará programando muito!')
    console.log('Continue praticando, mesmo depois de ter aprendido um pouco')

// Repetir as frases


//declaration - declarando a função (function statement)


function createPhrases() {
    console.log('Estudar é muito bom')
    console.log('Em breve, você estará programando muito!')
    console.log('Revisão é a mãe do aprendizado')
}

//executando a função (run, call, invoke) quantas vezes quiser

createPhrases()
createPhrases()
createPhrases()
createPhrases()

// Objetivos da função - agrupando códigos e reutilizando os mesmos!

console.log('Fim do programa')







