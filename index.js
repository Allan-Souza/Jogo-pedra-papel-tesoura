// PEDRA, PAPEL E TESOURA

const escolhaDoUsuario = () => {
    let userInput = prompt("Escolha pedra, papel ou tesoura!!!")

    if(userInput.toLowerCase() == 'pedra') {
        userInput = 0
    }else if(userInput.toLowerCase() == 'papel') {
        userInput = 1
    }else if(userInput.toLowerCase() == 'tesoura') {
        userInput = 2
    }else{
        document.write("Valor inválido, por favor digite apenas: pedra, papel ou tesoura!!!")
        userInput = 3
    }

    /*switch(userInput.toLowerCase()) {
        case 'pedra':
            userInput = 0
            break;
        case 'papel':
            userInput = 1
            break;
        case 'tesoura':
            userInput = 2
            break;
        default:
            document.write("Valor inválido, por favor digite apenas: pedra, papel ou tesoura!!!")
            userInput = 3
    }*/

    return userInput
}

const escolhaDoComputador = () => {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let result = Math.floor(Math.random() * (max - min)) + min;

    return result
}

const determineVencedor = (escolhaDoUsuario, escolhaDoComputador) => {
    if(escolhaDoUsuario === escolhaDoComputador) {
        document.write("Empatou!!")
    }else if(escolhaDoUsuario === 0 && escolhaDoComputador === 1) {
        document.write("Você perdeu")
    }else if(escolhaDoUsuario === 0 && escolhaDoComputador === 2) {
        document.write("Você ganhou")
    }else if(escolhaDoUsuario === 1 && escolhaDoComputador === 0) {
        document.write("Você ganhou")
    }else if(escolhaDoUsuario === 1 && escolhaDoComputador === 2) {
        document.write("Você perdeu")
    }else if(escolhaDoUsuario === 2 && escolhaDoComputador === 0) {
        document.write("você perdeu")
    }else if(escolhaDoUsuario === 2 && escolhaDoComputador === 1) {
        document.write("você ganhou")
    }
}

const iniciarJogo = () => {
    let userChoice = escolhaDoUsuario();
    let computerChoice = escolhaDoComputador();

    determineVencedor(userChoice, computerChoice)
}

iniciarJogo()