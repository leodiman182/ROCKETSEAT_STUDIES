// Objects

const person = {
    name: 'John',
    age: 20,
    weight: 88.6,
    isAdmin: true
}
console.log(person.name)
ou
console.log(`${person.name} tem ${person.age} anos`)



// Array
const animals = [
    'Lion' ,     // string
    'Monkey',    // string
    { // transforma em objeto
        name: 'Cat',
        age: 3
    }
]

// acessar valores dentro do Array

console.log(animals[0])
console.log(animals.length) // total

//através da posição