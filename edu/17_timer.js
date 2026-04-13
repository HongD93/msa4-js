// 타이머 함수
// 비동기적으로 코드를 실행함

// setTimeout(콜백함수, ms[, ...args]): number
// 설정한 일정 시간 후(ms)에 콜백 함수를 실행하는 메소드
// 콜백함수에 파라미터가 필요한 경우 ...args를 추가함
// 리턴값은 timeoutID 0이 아닌 정수값(해당 타이머의 고유한 식별값)
const timeoutID1 = setTimeout(() => {
  console.log('1초');
}, 1000);
const timeoutID2 = setTimeout(() => {
  console.log('2초');
}, 1000);
const timeoutID3 = setTimeout(() => {
  console.log('3초');
}, 1000);

console.log(timeoutID1);

// clearTimeout(timeoutID),
clearTimeout(timeoutID1);