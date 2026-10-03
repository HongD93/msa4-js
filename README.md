# msa4-js

JavaScript 기본 문법, 브라우저 DOM·이벤트, 비동기 처리를 학습하는 예제 모음입니다. 터미널에서 결과를 확인하는 스크립트와 HTML에 연결해 화면을 조작하는 예제가 함께 있습니다.

## 처음 시작하기

### 터미널에서 문법 확인

Node.js를 준비하고 저장소 루트에서 다음 예제를 실행합니다.

```sh
node edu/02_dataType.js
```

[자료형 예제](edu/02_dataType.js)의 코드와 터미널 출력을 비교하고, 값을 바꾼 뒤 다시 실행해 보세요. 저장소에 `package.json`은 없으므로 별도의 npm 설치 단계는 없습니다. [.vscode/launch.json](.vscode/launch.json)에는 현재 파일을 Node.js로 실행하는 디버그 설정도 있습니다.

### 브라우저에서 화면 조작

1. [DOM 예제](edu/15_dom.html)를 웹 브라우저에서 엽니다.
2. 개발자 도구의 콘솔을 열고 [대응 JavaScript](edu/15_dom.js)를 함께 살펴봅니다.
3. 코드를 수정한 뒤 저장하고 페이지를 새로고침합니다.

DOM·이벤트 예제는 HTML이 JavaScript를 불러오는 구조입니다. 브라우저의 `document` 등을 사용하는 파일은 Node.js로 단독 실행할 수 없습니다.

## 주제별 탐색

| 주제 | 예제 | 학습 내용 |
| --- | --- | --- |
| 기본 문법 | [자료형](edu/02_dataType.js), [조건문](edu/04_if.js), [반복문](edu/06_for.js) | 변수·자료형·연산자·조건문·반복문 |
| 함수와 데이터 다루기 | [함수](edu/07_function.js), [배열](edu/09_Array.js), [구조 분해](edu/14_destructuring.js) | 함수·스코프, 배열·문자열·수학·날짜 객체, 예외 처리 |
| 브라우저 동작 | [DOM](edu/15_dom.html), [이벤트](edu/16_event.html), [타이머](edu/17_timer.js) | 화면 요소 조작, 사용자 입력과 시간에 따른 동작 |
| 비동기 처리 | [AJAX](edu/18_AJAX.html), [Promise](edu/19_promise.js), [async·await](edu/20_async_await.js) | 요청과 응답, 비동기 작업 순서와 실패 처리 |
| 복습 | [tng/](tng/) | 주제별 문제, 화면 실습과 일부 정답 파일 |

비동기 예제는 다음 명령으로도 확인할 수 있습니다. 문자열을 순서대로 처리한 뒤, 문자열이 아닌 인자의 실패를 `catch`로 처리하는 예제입니다.

```sh
node edu/20_async_await.js
```

## 예제의 전제조건

- AJAX 예제는 외부 CDN의 Axios와 외부 이미지 API를 사용합니다. 인터넷 연결이 필요하며, 페이지·표시 개수를 입력한 뒤 조회합니다. 외부 서비스의 응답이나 브라우저 보안 정책에 따라 동작이 달라질 수 있습니다.
- [변수 예제](edu/01_variable.js)에는 `let` 선언 전 접근으로 `ReferenceError`가 발생하는 코드가 포함돼 있습니다. 일부 파일은 오류나 언어 동작을 관찰하는 실습이므로 실행 도중 오류가 나면 해당 코드와 주석을 함께 확인하세요.
