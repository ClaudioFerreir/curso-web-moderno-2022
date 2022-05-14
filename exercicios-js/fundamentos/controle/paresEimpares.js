
const numeros = [1, 2, 3, 4, 5]
let impares = []
let pares = []

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 == 0) {
    pares.push(numeros[i]);

  }else{
    impares.push(numeros[i])
  }
}

console.log(pares.sort())
console.log(impares.reverse())
