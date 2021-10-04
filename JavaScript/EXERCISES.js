
// EXERCÍCIOS

/*
    1. TRANSFORMAR NOTAS ESCOLARES

    Crie um algorítmo que transforme as notas do sistema numério para o sistema de notas em caracteres tipo (ABC)

    *   de 90 pra cima  - A  
    *   entre 80 - 89   - B 
    *   entre 70 - 79   - C
    *   entre 60 - 69   - D
    *   menor que 60    - F
    
*/

//  MINHA RESOLUÇÃO

/*
let grade
grade = 70


if (grade >= 90) {
    console.log('A')
} else if (grade < 90 && grade >= 80) {
    console.log('B')
} else if(grade < 80 && grade >= 70) {
    console.log('C')
} else if (grade < 70 && grade >= 60) {
    console.log('D')
} else {
    console.log('F')
}

*/

/*
    //RESOLUÇÃO MAYK

let score

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score <= 89
    let scoreC = score >= 70 && score <= 79
    let scoreD = score >= 60 && score <= 69
    let scoreF = score <60 && score >= 0

    let scoreFinal;

    if(scoreA) {
    scoreFinal = "A"
    } else if(scoreB) {
    scoreFinal = "B"
    } else if(scoreC) {
    scoreFinal = "C"
    } else if(scoreD) {
    scoreFinal = "D"
    } else if (scoreF) {
    scoreFinal = "F"
    } else {
    scoreFinal = "Nota Inválida"
    }

    return scoreFinal    
}

//  VALIDAÇÕES


console.log(getScore(100))
console.log(getScore(90))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(39))
console.log(getScore(76))
console.log(getScore(85))
console.log(getScore(67))

*/

/* EXERCÍCIO 2

    FLUXO DE CAIXA FAMILIAR

    CRIE UM OBJETO QUE POSSUIRÁ 2 PROPRIEDADES, AMBAS DO TIPO ARRAY:
        * RECEITAS []
        * DESPESAS []
    
    CRIE UMA FUNÇÃO QUE IRÁ CALCULAR O TOTAL DE RECEITAS E DESPESAS E IRÁ MOSTRAR UMA MENSAGEM SE A FAMÍLIA ESTÁ COM SALDO POSITIVO OU NEGATIVO, SEGUIDO DO VALOR DO SALDO
    
*/


/*

MINHA RESOLUÇÃO

function familyMoney (familyIncome, familyOutcome) {
    
    
    var familyIncome
    var familyOutcome 

    let result = familyIncome - familyOutcome

    let positiveIncome = result > 0;
    let negativeIncome = result < 0;
    let zeroIncome = result = 0;

    

    if (positiveIncome) {
        console.log("O saldo está positivo no valor de " + result + "reais")
    } else if (zeroIncome) {
        console.log(result + "O saldo está zerado")
    } else if (negativeIncome) {
        console.log(result + "O saldo está negativo no valor de" + result + "reais")
    }

    return result 
}

familyMoney(1000,2000)
*/
/*
    RESOLUÇÃO MAYK



let family = {
    incomes: [2500, 3200, 250.43, 360.45],
    expenses: [320.34, 128.45, 176.87, 1450.00]
}

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total
}



function calculateBalance() {
    const calculateIncomes = sum(family.incomes)
    const calculateExpenses = sum(family.expenses)

    const total = calculateIncomes - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "Negativo"

    if (itsOk) {
        balanceText = "Positivo"
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)} R$ `)
    
}

calculateBalance()
*/

/*
    EXERCÍCIO 3.

    Crie uma função que receba uma string em celcius ou fahrenheit e faça a transformação de uma unidade para a outra.

    C = (F- 32) * 5/9

    F = C * 9/5 + 32
*/



function transformDegree(degree) {
    const celciusExists = degree.toUpperCase().includes('C')
    const fahrentheitExists = degree.toUpperCase().includes('F')

    // fluxo de erro
    if(!celciusExists && !fahrentheitExists) {
        throw new Error ('Grau não identificado')
    }

    // fluxo ideal F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    // fluxo alternativo C -> F
    if (celciusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = celcius => celcius * 9 / 5 + 32
        degreeSign = 'F'
    }

    return formula(updatedDegree) + degreeSign
}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    console.log(transformDegree('10A'))
} catch (error) {
    console.log(error.message)
}


/*
    BUSCANDO E CONTANDO DADOS EM ARRAYS

    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios:

        * Contar o número de categorias e o número de livros em cada Categoria;
        * Contar o número de autores;
        * Mostrar livros do autor Augusto Cury;
        * Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.

*/
/*
const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clanson",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kyiosaki e Sharon L. Lechter",
            }
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategories = booksByCategory.length

// contar o número de livros dentro das categorias.

console.log(totalCategories);

for(let category of booksByCategory) {
    console.log('Total de livros da categoria: ', category.category)
    console.log(category.books.length)
}

function countAuthors() {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1)  {
                authors.push(book.author)    
            }
        }
    }

    console.log("Total de autores:", authors.length)

}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) {
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(", ")}`)
}

booksOfAuthor("Augusto Cury");
booksOfAuthor("George S. Clanson")

*/