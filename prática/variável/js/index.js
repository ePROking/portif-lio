//declaração
let nome 
let idade

//Atribuição
nome = "Evinilson"
idade = 23
morada = "Zona Ponta"

console.log("Bom dia chamo " +nome+ " e tenho " +idade+ " de idade e morro em " +morada)
if (idade >= 18) {
    console.log(nome + " você é maior de idade.");
} else if (idade >= 12) {
    console.log(nome + " você é menor de idade.");
} else {
    console.log(nome + " você é uma criança.");
}

//Reatribuição
nome = "Nelson"
idade = "20"
morada = "São Paulo"

console.log("Bom dia chamo " +nome+ " e tenho " +idade+ " de idade e morro em " +morada)

if (idade >= 18) {
    console.log(nome + " você é maior de idade.");
} else if (idade >= 12) {
    console.log(nome + " você é menor de idade.");
} else {
    console.log(nome + " você é uma criança.");
}


//Reatribuição
nome = "Cledilson"
idade = "15"
morada = "Praia"

console.log("Bom dia chamo " +nome+ " e tenho " +idade+ " de idade e morro em " +morada)
if (idade >= 18) {
    console.log(nome + " você é maior de idade.");
} else if (idade >= 12) {
    console.log(nome + " você é menor de idade.");
} else {
    console.log(nome + " você é uma criança.");
}

//Reatribuição
nome = "Lucas"
idade = "9"
morada = "Cabo Verde"


console.log("Bom dia chamo " +nome+ " e tenho " +idade+ " de idade e morro em " +morada)

if (idade >= 18) {
    console.log(nome + " você é maior de idade.");
} else if (idade >= 12) {
    console.log(nome + " você é menor de idade.");
} else {
    console.log(nome + " você é uma criança.");
}

//Declarando variavel undifined(indefinido)
let Profição;
console.log(Profição); // undefined
let endereço = undefined;
console.log(endereço); // undefined

/////
function criaMultiplicador(multiplicador) {
    return function(numero) {
        return numero * multiplicador;
    };
}


/////
const multiplicaPor2 = criaMultiplicador(2);
console.log(multiplicaPor2(5)); // Saída: 10

const multiplicaPor3 = criaMultiplicador(3);
console.log(multiplicaPor3(5)); // Saída: 15



//////
function criaSaudacao(saudacao) {
    return function(nome) {
        return `${saudacao}, ${nome}!`;
    };
}

const saudacaoFormal = criaSaudacao("Bom dia");
console.log(saudacaoFormal("João")); // Saída: Bom dia, João!

const saudacaoInformal = criaSaudacao("Oi");
console.log(saudacaoInformal("Maria")); // Saída: Oi, Maria!


//////
function estaNaSala(aluno, listaDeAlunos) {
    return listaDeAlunos.includes(aluno);
}

const alunosPresentes = ['João', 'Maria', 'Pedro', 'Ana'];

console.log(estaNaSala('Maria', alunosPresentes)); // Saída: true
console.log(estaNaSala('Carlos', alunosPresentes)); // Saída: false




//////////////
function soma(a, b) {
    return a + b;
}

// Chamando a função e armazenando o resultado
let resultado = soma(5, 3);
console.log(resultado); // Saída: 8

// Ou usando diretamente
console.log(soma(10, 20)); // Saída: 30

(function() {
    console.log("Essa função é chamada imediatamente!");
})(); 
// Saída: Essa função é chamada imediatamente!

// O código acima é uma função IIFE (Immediately Invoked Function Expression) que é execut

/////////////
function showinfo(){
    console.log("hoje é domingo");    
}
showinfo()

///////////////
function soma(leta, letb) {
    return leta + letb;
}

let result = soma(2, 4);
console.log("o resultado é " +result); // Saída: 6



///////////
function produto(letx, lety) {
    return letx * lety;
}

let resposta = produto(3, 4);
console.log("O resultado é " + resposta); // Saída: O resultado é 12
