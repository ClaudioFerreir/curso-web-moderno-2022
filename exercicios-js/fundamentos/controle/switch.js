const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10: //nesta situaçao ele considera o retorno do case abaixo
    case 9:
      console.log('Quadro de honra')
      break;
    case 8: case 7: // forma de representar a mesma saida para 2 cases, alternativa para o caso acima
      console.log('aprovado')
      break;
    case 6: case 5: case 4:
      console.log('recuperação')
      break;
    case 3: case 2: case 1: case 0:
      console.log('reprovado')
      break;
    default:
      console.log('nota invalida')
      break;
  }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)
imprimirResultado(11)
