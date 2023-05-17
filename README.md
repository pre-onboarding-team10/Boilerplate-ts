# 원티드 프리온보딩 인턴십 4주차 과제

## 과제 목표

- **코드 리뷰** 및 **기능 구현**

## 과제 내용

### 👀 코드 리뷰

1. 작성된 코드의 작동 방법을 익히신 후, 개선이 필요하다고 판단되는 부분이 있다면 수정.
2. 더 나은 프로젝트 구조나, 패턴, 에러 처리, 스타일링, 테스팅 방법 등 자유롭게 작업.

### 🛠 기능 구현

사용자가 input에 타이핑을 하면 아래에 제공된 search api를 통해 받은 아이템들이 dropdown에 보여질 수 있도록 `InputTodo`에 추천 기능 구현

#### 구현 조건

1. 디자인 가이드 참고해서 구현할 것. - `InputTodo` 디자인 수정 및  `dropdown` 추가
2. UI kit 사용 불가 - ex) Bootstrap, Ant Design, Tailwind CSS..
3. `InputTodo`에 `500ms` `debounce` 적용
4. `Dropdown` 추천된 아이템 리스트 초기값: 10, 아이템이 더 있다면 무한스크롤로 최대 10개씩 받아올 수 있도록 구현
5. `Dropdown`에서 아이템 하나를 선택 => `input`의 `value` 초기화 및 아이템이 리스트에 추가

### 📜 문서화

---

## 과제 진행 방법

개발 단위를 나누어 각자 구현 => Pull Request를 통해 코드리뷰, Best Practice 선정

-  개발단위
	1. 작성된 코드 리뷰 및 개선
	2. 추천 검색어 Dropdown 기능 구현
	3. 문서화 
	4. 테스트 코드

---
## 구현 결과
🔗 [배포 주소](https://pre-onboarding-team10-4.netlify.app/)

![Netlify Status](https://api.netlify.com/api/v1/badges/44c53515-8173-4a4c-8091-37d5156805ee/deploy-status)
---
## 프로젝트 실행 방법
1. 배포 URL 접속

2. 로컬 설치 및 실행

1) Clone Project
```bash
git clone https://github.com/pre-onboarding-team10/pre-onboarding-10th-4-10.git
```

2) Install Packages
```bash
npm install 
```

3) Project Start
```bash
npm start
```

**※ 로컬 실행 시 API KEY 값과 API 주소가 필요합니다.**

## 상세 구현 내용 -- (추가 예정)

---

1. 리팩토링

2. 무한 스크롤

3. debounce

4. dropdown
	
5. 테스트 코드 작성


---

# Directory

```bash
📦src
 ┣ 📂api
 ┣ 📂assets
 ┃ ┗ 📂css
 ┣ 📂components
 ┃ ┣ 📂base
 ┃ ┗ 📂todo
 ┣ 📂hooks
 ┣ 📂pages
 ┣ 📂types
 ┣ 📂utils
 ┣ 📜App.css
 ┣ 📜App.tsx
 ┗ 📜index.tsx
```

---
# Team Members

<table border>
  <tbody>
    <tr>
       <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/101001956?v=4"  alt="정민상님"/><br />
        <br/>
        <a href="https://github.com/jeongminsang">
          <img src="https://img.shields.io/badge/팀장 : 정민상-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src='https://avatars.githubusercontent.com/u/90402926?v=4'  alt="전종훈님"/><br />
        <br/>
        <a href="https://github.com/JunJongHun">
          <img src="https://img.shields.io/badge/전종훈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/97023321?v=4"  alt="종아인님"/><br />
       <br/>
        <a href="https://github.com/04ian80">
          <img src="https://img.shields.io/badge/종아인-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/81045794?v=4"  alt="정윤혁님"/><br/>
                <br/>
        <a href="https://github.com/hyukzz">
          <img src="https://img.shields.io/badge/정윤혁-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
         <tr>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/77673029?v=4"  alt="최지미님"/><br />
       <br/>
        <a href="https://github.com/rabbit-22">
          <img src="https://img.shields.io/badge/최지미-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/83802168?v=4"  alt="문지웅님"/><br/>
       <br/>
        <a href="https://github.com/woongsnote">
          <img src="https://img.shields.io/badge/문지웅-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/59640337?v=4"  alt="전애지님"/><br/>
       <br/>
        <a href="https://github.com/AEJIJEON">
          <img src="https://img.shields.io/badge/전애지-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
      <td align="center" width="200px">
        <img width="100%" src="https://avatars.githubusercontent.com/u/97525377?v=4"  alt="백인빈님"/><br/>
       <br/>
        <a href="https://github.com/blueline1984">
          <img src="https://img.shields.io/badge/백인빈-000?style=flat-round&logo=GitHub&logoColor=white"/>
        </a>
      </td>
     </tr>
  </tbody>
</table>
