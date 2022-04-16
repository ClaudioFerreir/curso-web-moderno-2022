// armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
  return a + b;
}

console.log(soma(2, 3))

//retorno implicito
const subtracao = (a, b) => a - b //nao precisa colocar chaves neste caso por a funcao que executa uma unica sentenca de codigo
const valor = a => a +3 // forma ainda mais compacta ja que possuimos um so parametro

console.log(subtracao(2, 3));
console.log(valor(5));

const imprimir2 = a => console.log(a);
imprimir2('Legal!!!')
