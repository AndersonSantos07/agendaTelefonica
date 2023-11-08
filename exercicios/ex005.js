/*
Escreva um algoritmo que leia 400 números e imprima o maior, o menor e a média dos números lidos.

*/


let soma = 0,menor,maior

function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

  }

for(let i=0;i<400;i++){

    const numero = getRandomNumber(1, 800)

    //soma
    soma += numero

    //menor
    if(menor === undefined){
        menor = numero
    }else if(numero < menor){

        menor = numero

    }

    
    //maior
    if(maior === undefined){
        maior = numero
    }else if(numero > maior){

        maior = numero

    }

}


let media = soma / 400;

console.log(`Maior número: ${maior}`);
console.log(`Menor número: ${menor}`);
console.log(`Média dos números: ${media}`);
