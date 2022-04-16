console.log('os verdadeiros TRUE')
console.log(!!3) //uso de negacao da negacao para ter o valor booleano
console.log(!!-1)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

let nome = ''
console.log(nome || 'Desconhecido'); //o ou e muito usado para dar um valor padrao. Neste exemplo, caso nao tenha digitado o nome
// sera impresso o valor Desconhecido ja que o vazio '' e falso (nao e valido).
