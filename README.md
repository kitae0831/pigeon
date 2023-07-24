## 심리테스트 사이트: 오구오구

리액트를 이용해 설문조사 페이지 구현 (json-server, react-router-dom 사용)

---

## 기술스택

<div align=left>
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/reactquery-9B9B9B?style=for-the-badge&logo=reactquery&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/vercel-A9A9A9?style=for-the-badge&logo=vercel&logoColor=white">
</div>

## 팀구성

| 박지환 | 박기태 | 김채현 | 황태규 | 임설빈 |

---

## 깃 플로우 전략

- main
- develop
- feature

---

## 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서 변경
- style : styled-components 수정, layout 수정 등 스타일 관련 변경
- refactor : 코드 리팩토링 (변수명 변경 등)
- chore : 설정 변경 등
  기타 변경사항

---

## 코드 컨벤션

### 폴더, 파일명

컴포넌트 파일명은 파스칼 케이스(PascalCase)를 사용한다.

```javascript
MainComponent.jsx;
Route.jsx;
```

컴포넌트를 제외한 폴더, 파일명은 카멜 케이스(camelCase)를 사용한다.

```javascript
components;
modules;
configStore.js;
```

### 함수

함수명은 카멜 케이스(camelCase)를 원칙으로 한다.

```javascript
function nameOfFunction() {
  // ...some logic
}
```

### 변수명

상수는 모두 대문자로 쓰며 띄어쓰기는 \_로 처리하며, 객체타입의 경우 카멜 케이스를 적용한다.

```javascript
const SOME_VALUE = 1;

const people = {
  name: '김자바',
  age: '26'
};
```

### 클래스명

클래스명은 케밥 케이스(kebab-case)를 원칙으로 한다.

```html
<h1 class="main-title">심리테스트</h1>
```

---
