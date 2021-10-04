// Manipulando Arrays

// Contar elementos - qualquer tipo de dado -  de um array - .length após o array

console.log([
    "a",
    {type:"array"},
    function () {return "alo"},
][2]())

// foi pedido para retornar o elemento 2, que no caso é uma função, logo em seguida executando ela com ()