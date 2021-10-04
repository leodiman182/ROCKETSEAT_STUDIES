// Criar um aplicativo de frases motivacionais

/*console.log('Estudar é bom')
console.log('Paciência e persistência')
console.log('Revisão é mãe do aprendizado')*/

// Agrupar uma série de códigos.
// Com uma function, você pode reutilizar um código previamente definido.

// Declaração da função - function statement

console.log('Começo do estudo de funções')

function createPhrases() {
    console.log('Estudar é bom')
    console.log('Paciência e persistência')
    console.log('Revisão é mãe do aprendizado')
}

// Executar a função
// execute, run, call, invoke

createPhrases ()

console.log('Fim do programa')




// Function Hoisting----------------------------

console.log('Começo do estudo de Hoisting')


//sayMyName()

//function sayMyName() {
    //console.log('Heisenberg')
//}


// Arrow function-------------------------------

console.log('Usando arrow function')

//const sayMyName = () => {
    //console.log('Heisenberg')
//}
//sayMyName()

// Callback function----------------------------

console.log('Usando callback function')

function sayMyName(name) {
    console.log('Antes de executar a função')
    name ()
    console.log('Depois de executar a função')
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

// Function Constructor ------------------------

console.log('Function Constructor')

/*
    Function () Constructor

    * expressão new
    * criar um novo objeto
    * this keyword
*/ 


function Person(name, age){
    this.name = name
    this.age = age
    this.myHistory = function () {
        return `Oi, meu nome é ${this.name}, e minha idade é ${this.age}.`
    }
    this.walk = function(){
        return this.name + " is walking "
    }
}

const walt = new Person("Walter")
const john = new Person('John')
console.log(walt.walk())
console.log(john.walk())


let date = new Date("2021-05-17")
console.log(date)


function welcome(username) {
    return `Olá ${username}, seja bem vindo de volta!`
}

function isPremium(username){
    if(username=='leodiman182'){
        return true
    } else{
        return false
    }
}




