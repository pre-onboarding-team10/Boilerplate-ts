# 원티드 프리온보딩 인턴십 4주차 과제

## 과제 목표

- **코드 리뷰** 및 **기능 구현**

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

## 상세 구현 내용

---

#### 1. 리팩토링
- TS로 주어진 소스 코드 옮겨 적기
- 작동 방법을 익히고, 개선이 필요하다고 판단되는 부분이 있다면 리팩토링
- CSS 적용, 리팩토링하기
#### 2. 무한 스크롤
- ref를 선언하여 타겟 요소를 지정
- observe 호출을 통해 target요소를 관찰하고 해당 요소가 관측되었을 경우 콜백함수 실행
#### 3. debounce
- input으로 받아온 text에 setTimeout() 500ms 적용
- keyword가 변경되면 debounce 코드 실행 후 debouncedInputValue 상태에 저장
- debouncedInputValue가 변경되면 search API 호출
#### 4. dropdown
- Search API를 통해 Dropdown 구현
- 현재 페이지(page)가 총 페이지(qty)수보다 적으면 다음 페이지 호출
- 다음 페이지가 없으면 hasNextPage 상태 false로 설정
- spinner 적용을 위해 isSuggestionLoading 로딩 상태 생성
#### 5. 테스트 코드 작성
- Base Components에 대한 Test Code
- icon Components에 대한 Test Code


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
