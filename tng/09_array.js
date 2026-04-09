// 원본은 보존하면서 오름차순 정렬 해주세요.
const ARR1 = [ 6, 3, 5, 8, 92, 3, 7, 5, 100, 80, 40 ];
const copy = [...ARR1];
copy.sort((a, b) => a - b);
console.log(ARR1, copy);

// 짝수와 홀수를 분리해서 각각 새로운 배열 만들어 주세요.
const ARR2 = [5,7,3,4,5,1,2,0];
const even = ARR2.filter(val => val % 2 === 0);
const odd = ARR2.filter(val => val % 2 !== 0);
console.log(even, odd);

// 각 요소에 3으로 나눈 나머지를 구해서, 그 나머지를 모아 새로운 배열로 생성해 주세요.
const ARR3 = [5,7,3,4,5,1,2,0];
console.log(ARR3.map(val => val % 3));


// -----------------------------
const arr4 = [5,7,3,4,5,1,2,0];
const result = test(arr4);
console.log(arr4, result);

function test(arr) {
  return arr.sort((a, b) => a - b);
}