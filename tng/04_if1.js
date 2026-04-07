// IF로 만들어주세요.
// 성적 
// 범위 : 
//		100   : A+
//		90이상 100미만 : A
//		80이상 90미만 : B
//		70이상 80미만 : C
//		60이상 70미만 : D
//		60미만: F

//출력 문구 : "당신의 점수는 XXX점 입니다. <등급>"
let grade = 55;
let rank = 'F';

if(grade > 100 || grade < 0 || typeof grade !== 'number') {
  console.log('입력값 오류');
} else {
  if(grade === 100) {
    rank = 'A+';
  } else if(grade >= 90) {
    rank = 'A';
  } else if(grade >= 80) {
    rank = 'B';
  } else if(grade >= 70) {
    rank = 'C';
  } else if(grade >= 60) {
    rank = 'D';
  } else {
    rank = 'F';
  }
  
  console.log(`당신의 점수는 ${grade}점 입니다. <${rank}>`);
}