// CONTROL FLOW


// THROW - DISPARAR UM ERRO


function sayMyName(name) {
    if (name === '') {
        throw new Error("Um nome é obrigatório")
    }

    console.log('Depois do erro')
}

// DISPARAR - PARA QUE ALGO CAPTURE - CATCH - APÓS UMA TENTATIVA - TRY

// TRY...CATCH

try {
    sayMyName()
} catch(e) {
    console.log(e)
}