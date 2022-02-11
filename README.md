# mern_blog
>## 프리뷰
<details>
  <summary>프리뷰 열기</summary>
  
  ![image](https://user-images.githubusercontent.com/75290655/153558026-ea81b9d8-cbb3-4f64-a795-37395c515586.png)
</details>

___
>## 설명

- mern_blog는 MERN 스택을 이용한 팀 프로젝트 포트폴리오입니다.
- MERN 스택을 이용한 블로그 서비스 개발 학습 및 깃허브를 통한 협업 능력을 배양하기 위해서 만들었습니다.
- mern_blog 서비스에 회원가입하여 자신만의 블로그를 구축하는 서비스입니다.
- 최우선 목표는 1달 이내에 프로젝트 개발 끝맺음입니다.
___
>## 팀 구성

멤버   | 팀          | 개발         | 깃허브                             | 특이 사항
---   | ---         | ---          | ---                                | ---
박은서 | 웹디자인    | figma 디자인  |                                    | 2월 15일 화요일 디자인 제출 예정
이동현 | 프론트엔드 |              | https://github.com/Dhyunlee         |
곽태욱 | 프론트엔드 |              | https://github.com/TaewookKwak      |
신승식 | 백엔드     | 유저 계정      | https://github.com/artemismars    |
이현진 | 백엔드     | 블로그 포스트  | https://github.com/5witchkr        |
총원 | 5 |
___
>## 스택
#### 웹디자인
1. Figma

#### 프론트엔드
1. React

#### 백엔드
1. Express
2. MongoDB
___
>## 라우팅
| 경로     | 설명       | 링크 |
| ---     | ---        | --- |
| `/`       | 메인 화면   |
| `/login`  | 로그인      |
| `/signup` | 회원가입    |
| `/p/:username` | 유저 개인 블로그 |
| `/edit`   | 게시글 수정 |
| `/post`   | 게시글 업로드 |
| `/detail` | 게시글 경로 |
___
>## 모델 리스트
#### 1. User
<details>
<summary>유저 모델 코드</summary>
  
```js
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  }),
  username: {
    type: String,
    required: true,
    unique: true,
    minLength: 6,
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minLength: 6
  },
  avatar: {
    type: String
  }
 });
```
</details>

<details>
  <summary>유저 모델 테이블</summary>
  
키       | 데이터타입 | required | unique | minLength | 
---      | ---      |    ---    |  ---   | ---       |
_id      | object  |            |
email    | String  | true       | true   |
username | String  | true       | true   |   3
password | String  | true       |        |  6
avatar   | String  |            |        |
token    | String  |
</details>

#### 1. Post
<details>
<summary>게시물 모델 코드</summary>
  
```js
const postSchema = new Schema({
  
 });
```
</details>

<details>
  <summary>게시물 모델 테이블</summary>
  
키       | 데이터타입 | required | unique | minLength | 
---      | ---      |    ---    |  ---   | ---       |
_id      | object  |            |
email    | String  | true       | true   |
username | String  | true       | true   |   3
password | String  | true       |        |  6
imagePath| String  |            |        |
token    | String  |            | true   |
</details>

___
>## 모듈 리스트

모듈      | 기능                        | 버전 | 팀
---       | ---                         | --- | ---
`bcryptjs`  | 비밀번호 일방향 암호화 및 검사 | ^2.4.3    | 백엔드
`dotenv`    | 서버 보안 관련 환경변수 설정   | ^16.0.0    | 백엔드
`mongoose`  | 몽고 DB 연결 및 제어         | ^6.2.1     | 백엔드
`react-router-dorm` | 리액트 라우팅        | ^5.2.0     | 프론트엔드
