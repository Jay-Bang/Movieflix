# MovieFlix: Vue.js 기반 영화 정보 웹사이트

![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=white) ![Vue.js](https://img.shields.io/badge/Vue.js-3.2-green?logo=vue.js) ![TMDB API](https://img.shields.io/badge/TMDB%20API-01B4E4?logo=themoviedatabase&logoColor=white)

## 1. 프로젝트 개요

이 프로젝트는 Vue 3.0 학습의 일환으로, TMDB (The Movie Database) API를 활용하여 Netflix와 유사한 UI를 가진 영화 정보 웹사이트를 구축한 토이 프로젝트입니다. Props, Emit, Router 등 Vue의 핵심 기능을 익히고, 외부 API와 연동하는 실전 경험을 쌓는 것을 목표로 했습니다.

## 2. 주요 기능

- **메인 페이지:** 인기 영화 및 현재 상영 중인 영화 목록을 갤러리 형태로 제공합니다.
- **영화 상세 정보:** 포스터, 개요, 평점 등 각 영화의 상세 정보를 볼 수 있는 페이지를 제공합니다.
- **영화 검색:** 키워드를 기반으로 원하는 영화를 검색하고 결과를 확인할 수 있습니다.

## 3. 기술 스택 및 구현

- **언어:** JavaScript (ES6)
- **프레임워크:** Vue.js (v3.2.39)
- **핵심 구현 내용:**
  - **컴포넌트 통신:** Props와 Emit을 사용하여 부모-자식 컴포넌트 간의 명확한 데이터 흐름을 구현했습니다.
  - **페이지 라우팅:** Vue Router를 이용해 메인, 상세 정보, 검색 페이지 간의 SPA(Single Page Application) 네비게이션을 구현했습니다.
  - **데이터 연동:** Axios 라이브러리를 사용하여 TMDB API로부터 영화 데이터를 비동기적으로 호출하고, 응답받은 데이터를 화면에 렌더링했습니다.

## 4. 개발 과정 및 소요 시간

- **총 소요 시간:** 약 40시간
- **목표:** Vue 입문 1개월 차에 학습한 내용을 바탕으로, 주어진 디자인 시안과 최대한 유사한 결과물을 만드는 데 집중했습니다.

## 5. 로컬 개발 환경 설정

### 5.1. 사전 준비

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)

### 5.2. 프로젝트 설치

```sh
npm install
```

### 5.3. 개발 서버 실행

컴파일 및 Hot-Reload 기능이 활성화된 개발 서버를 실행합니다.

```sh
npm run dev
```

### 5.4. 프로덕션 빌드

배포를 위한 프로덕션 버전으로 컴파일 및 최소화를 진행합니다.

```sh
npm run build
```

### 5.5. 코드 린팅

ESLint를 사용하여 코드 스타일을 검사합니다.

```sh
npm run lint
```

## 6. 실행 결과 (Screenshots)

#### 목표 디자인
![unnamed](https://user-images.githubusercontent.com/102448185/194033961-e6c65200-a739-4097-b5a2-389ae33ac3b8.jpg)

#### 1. 메인 페이지
![Screenshot 2022-10-05 at 18 51 37](https://user-images.githubusercontent.com/102448185/194033750-21766c9a-a341-4ffa-84ef-e40d103565e8.jpg)

#### 2. 영화 상세 페이지
![Screenshot 2022-10-05 at 18 51 13](https://user-images.githubusercontent.com/102448185/194033835-20a320dc-f6c0-435b-9815-94e9aed46cd5.jpg)

#### 3. 검색 페이지
![Screenshot 2022-10-05 at 18 51 29](https://user-images.githubusercontent.com/102448185/194033874-bf389ba4-29e4-4ac2-9655-d68d69b4b42b.jpg)