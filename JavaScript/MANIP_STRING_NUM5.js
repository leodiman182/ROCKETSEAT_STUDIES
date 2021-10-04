// Manipulando Strings e Números

// Separe um texto que contém espaços em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque "_"

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")

console.log(myArray)

//É feita uma divisão em cada parametro que eu coloque dentro do .split("") - nesse caso, como há um espaço dentro, em cada espaço da frase, houve uma divisão.

let phraseWithUnderScore = myArray.join("_")
console.log(phraseWithUnderScore.toUpperCase())