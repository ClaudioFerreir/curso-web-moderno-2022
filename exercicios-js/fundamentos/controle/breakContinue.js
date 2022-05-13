const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let x in nums) {
  if (x == 5) {
    break //interromper a interaçao e sair para fora do laço que esta associado
          //nao necessariamente e usado em estruturas de repeticao pode ser usado no switch tb
  }
  console.log(`${x} = ${nums[x]}`)
}

for (let y in nums) {
  if (y == 5) {
    continue //interrompe a interacao atual e pula para a proxima interaçao
             //como continua so faz sentido ser usado em estruturas de repetiçao
  }
  console.log(`${y} = ${nums[y]}`)
}

