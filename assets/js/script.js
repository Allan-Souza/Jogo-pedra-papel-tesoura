// PEDRA, PAPEL E TESOURA

const escolhaDoUsuario = () => {
    let userInput = prompt("Escolha pedra, papel ou tesoura!!!")

    if(userInput.toLowerCase() == 'pedra') {
        userInput = 0;
    }else if(userInput.toLowerCase() == 'papel') {
        userInput = 1;
    }else if(userInput.toLowerCase() == 'tesoura') {
        userInput = 2;
    }else{
        alert("Valor inválido, por favor digite apenas: pedra, papel ou tesoura!!!");
        userInput = 3;
    }

    console.log(`VALOR INSERIDO PELO USUÁRIO: ${userInput}`)

    return userInput
}

const escolhaDoComputador = () => {
    let min = Math.ceil(0);
    let max = Math.floor(3);
    let result = Math.floor(Math.random() * (max - min)) + min;

    console.log(`VALOR INSERIDO PELO USUÁRIO: ${result}`)

    return result
}


const criaP = () => {
    let p = document.createElement('p');
    return p;
}


const determineVencedor = (usuarioValue, computadorValue) => {
    const resultado = document.querySelector('.resultado');
    const p = criaP();

    if(usuarioValue === computadorValue) {
        p.innerHTML = "Empatou!";
        p.classList.add('draw');
        resultado.appendChild(p)
    }else if(usuarioValue === 0 && computadorValue === 1) {
        p.innerHTML = "Você perdeu!"
        p.classList.add('lose');
        resultado.appendChild(p)
    }else if(usuarioValue === 0 && computadorValue === 2) {
        p.innerHTML = "Você ganhou!!"
        p.classList.add('win');
        resultado.appendChild(p)
    }else if(usuarioValue === 1 && computadorValue === 0) {
        p.innerHTML = "Você ganhou!!"
        p.classList.add('win');
        resultado.appendChild(p)
    }else if(usuarioValue === 1 && computadorValue === 2) {
        p.innerHTML = "Você perdeu!!"
        p.classList.add('lose');
        resultado.appendChild(p)
    }else if(usuarioValue === 2 && computadorValue === 0) {
        p.innerHTML = "Você perdeu!!"
        p.classList.add('lose');
        resultado.appendChild(p)
    }else if(usuarioValue === 2 && computadorValue === 1) {
        p.innerHTML = "Você ganhou!!"
        p.classList.add('win');
        resultado.appendChild(p)
    }
}

const iniciarJogo = () => {
    let userChoice = escolhaDoUsuario();
    let computerChoice = escolhaDoComputador();

    determineVencedor(userChoice, computerChoice)
}

iniciarJogo();