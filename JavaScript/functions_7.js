

// callback function

function sayMyName(name) {
    console.log('Antes de executar a callback')

    name()

    console.log('Depois de executar a callback')
}

sayMyName(
    () => {
        console.log('Estou em uma callback!')
    }
)

// função que é passada para outra função