// PEDRA, PAPEL E TESOURA
/*const escolhaDoUsuario = () => {
    let userInput = prompt("Escolha pedra, papel ou tesoura!!!")

    if(userInput.toLowerCase() == 'pedra') {
        userInput = 0
        document.write(userInput)
    }else if(userInput.toLowerCase() == 'papel') {
        userInput = 1
        document.write(userInput)
    }else if(userInput.toLowerCase() == 'tesoura') {
        userInput = 2
        document.write(userInput)
    }else{
        document.write("Valor inválido, por favor digite apenas: pedra, papel ou tesoura!!!")
        userInput = 3
    }

    return userInput
}*/

const escolhaDoComputador = () => {
    //let decisaoComp = ""

    min = Math.ceil(0);
    max = Math.floor(3);
    result = Math.floor(Math.random() * (max - min)) + min;

    /*if(result == 0) {
        decisaoComp = "tesoura"
    }else if(result == 1) {
        decisaoComp = "papel"
    }else if(result == 2) {
        decisaoComp = "pedra"
    }

    return decisaoComp*/
    return result
}
escolhaDoComputador()