# 🏷️ IssueTracker-34

부스트캠프 3주 그룹프로젝트

- [요구사항 분석서](https://github.com/boostcamp-2020/IssueTracker-34/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D%EC%84%9C)
- [그라운드 룰](https://github.com/boostcamp-2020/IssueTracker-34/wiki/%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C-%EB%A3%B0)
- [이슈 페이지](https://github.com/boostcamp-2020/IssueTracker-34/issues)
- [프로젝트 페이지](https://github.com/boostcamp-2020/IssueTracker-34/projects/1)
- [위키 페이지](https://github.com/boostcamp-2020/IssueTracker-34/wiki)

<br />

## 🙆‍♂️ 팀원

|                         J064 류남광                          |                         J169 임기봉                          |                         J171 임채욱                          |                         J211 탁성건                          |
| :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/35261724/97651451-6dd91e80-1a9f-11eb-8baf-19d2fa93c77e.jpg" alt="img" height="150px" width="150px" /> | <img src="https://avatars2.githubusercontent.com/u/57941049?s=460&u=b20800e6bc681bf4c683143cbcf11b9aa7dcf50c&v=4 =150x150" alt="img" height="150px" width="150px" /> | <img src="https://avatars1.githubusercontent.com/u/8137615?s=460&u=3cbc84a925ac49ae3603adbcff8b24b444e478da&v=4" alt="img" height="150px" width="150px" /> | <img src="https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4" alt="img" height="150px" width="150px" /> |
|                             ISFJ                             |                             ISFP                             |                             ISFJ                             |                             ISFJ                             |

<br />

## ❤️ 프로젝트 소개

### 로그인 페이지

- github 로그인을 제공합니다.
- 이외의 별도의 로그인 수단은 존재하지 않습니다.

<img width="700" alt="스크린샷 2020-12-23 오후 8 30 51" src="https://user-images.githubusercontent.com/8137615/102994162-e02b2400-4561-11eb-8c77-d697d238a938.png">

### 메인 페이지

- 현재 생성된 이슈 목록을 볼 수 있는 페이지입니다.
- logout, 새로운 이슈 생성, 라벨 관리(생성, 수정, 삭제), 이슈 필터, 이슈 상세페이지로 이동하는 기능을 제공합니다.
- 이슈 제목을 클릭하면 이슈 상세 페이지로 이동합니다.

<img width="700" alt="스크린샷 2020-12-23 오후 8 31 10" src="https://user-images.githubusercontent.com/8137615/102994244-0ea8ff00-4562-11eb-8cb1-a2fc0516a472.png">

### 이슈 필터

- 보달창이 뜨는 것 외에는 기능이 없습니다.
- 창 외부를 클릭하면 창이 닫힙니다.
- 본래 목적은 선택한 버튼에 따라 검색 결과를 보여줘야하지만 모달창만 구현되었습니다.

<img width="250" alt="스크린샷 2020-12-23 오후 8 31 22" src="https://user-images.githubusercontent.com/8137615/102994588-b0305080-4562-11eb-84ae-c50ef2a6118d.png">

### Author, Label, Milestone, Assignee

- 작성자, 라벨, 작업자에 따른 필터를 이슈목록에 적용 할 수 있는 기능을 제공합니다.
- 선택한 결과에 따라 해당 이슈들이 목록으로 나타납니다.

<img width="450" alt="스크린샷 2020-12-23 오후 8 32 00" src="https://user-images.githubusercontent.com/8137615/102994630-c76f3e00-4562-11eb-9eee-bbdd0fd3d24b.png">

### 이슈 생성 페이지

- 새로운 이슈를 생성할 수 있습니다.
- 이슈 제목을 작성해야만 생성 버튼이 활성화 됩니다.
- 이슈 본문에서 내용 작성을 그만둔 후 3초 후에 현재 작성한 글자 수를 잠시 보여줍니다.
- assignees를 지정할 수 있습니다.
- labels를 지정할 수 있습니다.
- 이슈 생성을 취소하면 메인 페이지으로 돌아갑니다.

<img width="700" alt="스크린샷 2020-12-23 오후 8 32 35" src="https://user-images.githubusercontent.com/8137615/102994704-e8379380-4562-11eb-9ae8-9f067a92ade8.png">

### 이슈 상세 페이지

- 이슈 제목을 수정 할 수 있습니다.
- assignees를 지정 할 수 있습니다.
- labels를 지정 할 수 있습니다.
- 이슈를 open, close 할 수 있습니다.
- 이슈에 comment를 작성 할 수 있습니다.

<img width="750" alt="스크린샷 2020-12-23 오후 8 32 58" src="https://user-images.githubusercontent.com/8137615/102994737-fa193680-4562-11eb-89a6-b967fa731d99.png">

### 라벨 페이지

- 새로운 Label을 생성 할 수 있습니다.
  - 라벨의 이름과 색상을 지정하면 왼쪽 위의 미리보기 컴포넌트에 실시간으로 반영됩니다.
- 현재 존재하는 Label의 목록이 나타납니다.
- Edit 버튼을 누르면 Label의 내용을 수정 할 수 있습니다.
- Delete 버튼을 누르면 Label을 삭제합니다.

<img width="750" alt="스크린샷 2020-12-23 오후 8 33 22" src="https://user-images.githubusercontent.com/8137615/102994782-15844180-4563-11eb-91e9-be93cb2de469.png">



## :computer: Install & Run

### Install

```shell=
git clone -b production --single-branch https://github.com/boostcamp-2020/IssueTracker-34.git
```

### GitHub OAuth

GitHub OAuth 설정 후 Client ID와 Client Secret을 `.env`에서 활용합니다.

### Frontend

- `IssueTracker-34/front/.env` 파일 생성

```.env
API_URL=api_url
HOMEPAGE_URL=front_url
GITHUB_CLIENT_ID=client_id
```

- npm install & start

```shell=
cd IssueTracker-34/front
npm install
npm start
```

### Backend

- `IssueTracker-34/back/.env` 파일 생성

```.env
DB_HOST=localhost
DB_USER=username
DB_PASS=password
DB_DATABASE=database_name

SEQ_DIALECT=mysql
SEQ_POOL_MAX=pool_max
SEQ_POOL_MIN=pool_min
SEQ_POOL_ACQUIRE=pool_acquire
SEQ_POOL_IDLE=pool_idle

PORT=port_number
PRIVATEKEY=privatekey_name
baseURL=base_url
GITHUB_CLIENT_ID=github_client_id
GITHUB_CLIENT_SECRET=github_client_secret
```

- npm install & start

```shell=
cd IssueTracker-34/back
npm install
npm start
```

http://127.0.0.1:3000/ 접속

<br />

## 📃 Documents

- [ERD v2](https://github.com/boostcamp-2020/IssueTracker-34/wiki/ERD-v2)
- [MySQL Foward Engineering v2](https://github.com/boostcamp-2020/IssueTracker-34/wiki/MySQL-Foward-Engineering-v2)
- [API 문서](https://github.com/boostcamp-2020/IssueTracker-34/wiki/API-%EB%AC%B8%EC%84%9C)
- [Backend Architecture](https://github.com/boostcamp-2020/IssueTracker-34/wiki/Backend-Architecture)

<details><summary>개발 일지</summary>
<p>


- [개발 일지 템플릿](https://github.com/boostcamp-2020/IssueTracker-34/wiki/%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80-%ED%85%9C%ED%94%8C%EB%A6%BF)
- [2020.10.27 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.27-%EA%B0%9C%EB%B0%9C%EC%9D%BC%EC%A7%80)
- [2020.10.28 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.28-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.10.29 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.29-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.03 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.03-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.04 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.04-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.05 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.05-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.09 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.09-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.10 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.10-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.11 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.11-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)
- [2020.11.12 개발 일지](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.12-%EA%B0%9C%EB%B0%9C-%EC%9D%BC%EC%A7%80)

</p>
</details>

<details><summary>데일리 스크럼</summary>
<p>


- [스크럼 템플릿](https://github.com/boostcamp-2020/IssueTracker-34/wiki/%EC%8A%A4%ED%81%AC%EB%9F%BC-%ED%85%9C%ED%94%8C%EB%A6%BF)
- [2020.10.27 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.27-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.10.28 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.28-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.10.29 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.29-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.10.30 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.30-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.02 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.02-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.03 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.03-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.04 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.04-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.05 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.05-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.10 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.10-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.11 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.11-%EC%8A%A4%ED%81%AC%EB%9F%BC)
- [2020.11.12 스크럼](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.12-%EC%8A%A4%ED%81%AC%EB%9F%BC)

</p>
</details>

<details><summary>스프린트 계획 회의 회의록</summary>
<p>


- [2020.10.26 회의록](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.26-%ED%9A%8C%EC%9D%98%EB%A1%9D)
- [2020.11.02 회의록](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.02-%ED%9A%8C%EC%9D%98%EB%A1%9D)
- [2020.11.09 회의록](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.09-%ED%9A%8C%EC%9D%98%EB%A1%9D)

</p>
</details>

<details><summary>피어 세션</summary>
<p>


- [2020.10.30 피어 세션](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.30-%ED%94%BC%EC%96%B4%EC%84%B8%EC%85%98-1%EC%A3%BC%EC%B0%A8)
- [2020.11.06 피어 세션](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.06-%ED%94%BC%EC%96%B4-%EC%84%B8%EC%85%98)

</p>
</details>

<details><summary>그룹 회고</summary>
<p>


- [2020.10.30 그룹 회고](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.10.30-%EA%B7%B8%EB%A3%B9-%ED%9A%8C%EA%B3%A0)
- [2020.11.06 그룹 회고](https://github.com/boostcamp-2020/IssueTracker-34/wiki/2020.11.06-%EA%B7%B8%EB%A3%B9-%ED%9A%8C%EA%B3%A0)

</p>
</details>
