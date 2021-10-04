// ESTRUTURAS DE REPETIÇÃO

// FOR... IN


// CRIA UM LOOP EM CIMA DE UM OBJETO


let person = {
    name: 'Walter',
    age: 26,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
}

// LISTA TODAS AS PROPRIEDADES ATRIBUÍDAS A UM ELEMENTO