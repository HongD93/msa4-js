// for 문
// 기본문법
// for(초기값; 조건식; 1회 루프당 증감 값) {
//    // 반복하고 싶은 처리
// }

// for(let i = 0; i < 3; i++) {
//   if(i === 1) {
//     // break: 처리중 break를 만나면 그 즉시 루프 종료
//     break;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for(let i = 1; i < 5; i++) {
//   // continue: 만나는 즉시 그 다음 루프로 진행
//   if(i % 2 === 0) {
//     continue;
//   }
//   console.log(`${i}번째 루프문`);
// }

// for(let i = 0; i < 3; i++) {
//   console.log(`부모: ${i}번째`);

//   for(let z = 0; z < 3; z++) {
//     console.log(`자식: ${z}번째`);
//   }
// }

// 구구단 2단 출력
// 예시)
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// 2 X 9 = 18
// let dan = 2;
// let multi = 19;
// for(let i = 1; i <= multi; i++) {
//   console.log(`${dan} X ${i} = ${i * dan}`);
// }

// 구구단 2~9단을 출력
// 예시)
// ** 2단 **
// 2 X 1 = 2
// 2 X 2 = 4
// ...
// ** 3단 **
// 3 X 1 = 3
// 3 X 2 = 6
// ...
// 9 X 8 = 72
// 9 X 9 = 81
let startDan = 2;
for(startDan; startDan <= 9; startDan++) {
  console.log(`** ${startDan}단 **`);

  for(let z = 1; z <= 19; z++) {
    console.log(`${startDan} X ${z} = ${startDan * z}`);
  }
}