/*
    Type conversion (typecasting) vs type coersion
*/

//console.log(Number('9') + 5)

/*
    FALSY
    Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

    false
    0
    -0
    ""
    null
    undefined
    NaN
*/

// console.log( NaN ? 'verdadeiro' : 'falso' )

// Nesse caso, se o 'true' fosse um dos valores citados acima, ele seria convertido, através de um type coersion em um valor - Falsy

/*
    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true - boolean
    {} - empty object
    [] - array
    1 - number
    4.20 - decimal number
    "0" - string
    "false" - string
    -1
    Infinity
    -Infinity
*/

// console.log( [] ? 'verdadeiro' : 'falso' )