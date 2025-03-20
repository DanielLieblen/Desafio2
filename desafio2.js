
//Q1


let numero = 0; 

while (numero !== 3) {
  numero = parseInt(prompt("Digite um número:"));
}

//Q2

const SENHA_CORRETA = "1234"; // Defina a senha correta aqui
let tentativas = 0;
let acessoConcedido = false;

do {
    const senha = prompt("Digite a senha de acesso:");
    tentativas++;
    
    if (senha === SENHA_CORRETA) {
        acessoConcedido = true;
        break; // Interrompe o loop imediatamente se a senha estiver correta
    }
} while (tentativas < 3 && !acessoConcedido);

if (acessoConcedido) {
    alert("Acesso concedido!");
} else {
    alert("Senha bloqueada!");
}


//Q3
// Cria uma lista com 4 números
const numeros = [10, 20, 30, 40];

// Exibe todos os números da lista
console.log("Exercício 3:");
console.log(numeros);


//Q4
// Solicita 5 números e armazena em uma lista
const listaNumeros = [];
let contador = 0;

while (contador < 5) {
    const numero = parseFloat(prompt(`Digite o ${contador + 1}º número:`));
    listaNumeros.push(numero);
    contador++;
}

// Exibe a lista completa
console.log("\nExercício 4:");
console.log("Números digitados:", listaNumeros);





//Q5
// Função que retorna uma mensagem personalizada
function mensagemPersonalizada() {
    return "Seja bem-vindo(a) ao sistema! 🌟";
}

console.log("\nExercício 5:");
console.log(mensagemPersonalizada());






//Q6
// Função que retorna uma saudação personalizada
function saudacao(nome) {
    return `Olá, ${nome}, que bom ter você no programa Trilhas. 🚀`;
}
console.log("\nExercício 6:");
console.log(saudacao("Maria"));





//Q7
// Função que calcula o quadrado de um número
function calcularQuadrado(numero) {
    return numero * numero;
}
console.log("\nExercício 7:");
console.log("Quadrado de 5:", calcularQuadrado(5)); 


//Q8
// Função que subtrai dois números
function Subtracao(numero1, numero2) {
    return numero1 - numero2;
}

// Exemplo de uso
console.log("\nExercício 8:");
console.log("Subtração 10 - 3:", Subtracao(10, 3));


