// Manipulando Strings e Números

// Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula

let number = 123.1207319283
console.log(number.toFixed(2).replace(".", ","))

// a função .toFixed retorna uma String e, portanto, é possível atribuir a ',', já que não faz parte da cadeia de numbers - apenas o '.'