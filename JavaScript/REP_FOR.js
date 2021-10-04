// ESTRUTURAS DE REPETIÇÃO

// for - BREAK PARA PARAR/CONTINUE PARA PULAR O NÚMERO ESPECIFICADO

for (let i = 100; i > 0; i--) {
    if(i === 50) {
        break;
    }

    console.log(i)
}

// SENDO i 100, ELE EXISTIRÁ ENQUANTO i>0, REALIZANDO A SUBTRAÇÃO i-- UMA POR VEZ, MAS O IF DIZ QUE ISSO OCORRERÁ ATÉ QUE i FOR ESTRITAMENTE IGUAL A 50

for (let i = 10; i > 0; i--) {
    if(i === 5) {
        continue;
    }

    console.log(i)
}

// NESSE CASO, COM O 'CONTINUE', ELE SIMPLESMENTE PULA O VALOR ESPECIFICADO E CONTINUA REALIZANDO O CÓDIGO

