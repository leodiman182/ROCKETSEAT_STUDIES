// Manipulando Arrays

/*
    * adicionar um item no fim
    * adicionar um item no começo
    * remover do fim
    * remover do começo
    * pegar somente alguns elementos do Array
    * remover 1 ou mais itens em qualquer posição do Array
    * encontrar a posição de um elemento do Array

*/

let techs = ["html", "css", "js"]

// adicionando item no fim (push)
techs.push("nodejs")

// adicionando item no começo (unshift)
techs.unshift("SQL")

// removendo item do final
//      techs.pop()

// recomevendo do começo
//      techs.shift()


//  pegar somente alguns elementos
console.log(techs.slice(1, 3))

//remover 1 ou mais itens em qualquer posição do array - (qual elemento tirar, quantos a partir do 1)
//techs.splice(1, 1)

// encontrar a posição de um elemento
let index = techs.indexOf('css')



console.log(index)
