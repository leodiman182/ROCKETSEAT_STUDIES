// CONDICIONAIS

function timeMessage(time) {
    
    var time

    if (time <= 12) {
        console.log("Bom dia!");
    } else if (time > 12 && time <= 18){
        console.log("Boa tarde!");
    } else if (time > 18 && time <=24) {
        console.log("Boa noite!");
    } else {
        console.log("Hora inválida!")
    }
    
};

timeMessage(6);
timeMessage(14);
timeMessage(20);


// CHARADA - QUAL O PROGRAMA VAI PASSAR DEPOIS?