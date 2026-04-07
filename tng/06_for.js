let k = '';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    k += '*';
  }
  k += '\n';
}
console.log(k);

k = '';
for (let i = 0; i < 5; i++) {
  k += '*'
  console.log(k);
}

k = '';
let q = '';
for (let i = 5; i > 0; i--) {
  for (let j = 1; j < i; j++) {
    k += ' ';
  }
  q += '*';
  k += q + '\n';
}
console.log(k);

let space = '     ';
let star = '';
for(let i = 0; i < 5; i++) {
  star += '*';
  console.log(`${space.slice(1, space.length - i)}${star}`);
}