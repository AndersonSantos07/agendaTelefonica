
/*

Escreva um algoritmo que leia seis números e os imprima em ordem crescente.

*/



const numeros = [];


function getRandomNumber(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

  }


for (let i = 1; i <= 6; i++) {
  const numero = getRandomNumber(1,50)
  numeros.push(numero);
}


numeros.sort((a, b) => a - b);


console.log("Números em ordem crescente: " + numeros.join(", "));
