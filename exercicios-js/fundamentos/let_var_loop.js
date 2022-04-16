for (var i = 0; i < 10; i ++){
  console.log(i);
}

console.log('i = ', i); //uso do var pode causar um problema por ser global


for (let x = 0; x < 10; x ++){
    console.log(x);
}

// console.log('x = ', x); //causa um erro pq a variavel let nao pode ser vista fora do escopo
