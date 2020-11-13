# 🏷️ IssueTracker-34
부스트캠프 3주 그룹프로젝트

- [요구사항 분석서](https://github.com/boostcamp-2020/IssueTracker-34/wiki/%EC%9A%94%EA%B5%AC%EC%82%AC%ED%95%AD-%EB%B6%84%EC%84%9D%EC%84%9C)
- [그라운드 룰](https://github.com/boostcamp-2020/IssueTracker-34/wiki/%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C-%EB%A3%B0)
- [이슈 페이지](https://github.com/boostcamp-2020/IssueTracker-34/issues)
- [프로젝트 페이지](https://github.com/boostcamp-2020/IssueTracker-34/projects/1)
- [위키 페이지](https://github.com/boostcamp-2020/IssueTracker-34/wiki)

<br />

## 🙆‍♂️ 팀원

| J064 류남광 | J169 임기봉  | J171 임채욱  | J211 탁성건 |
| :--------: | :--------: | :---------: | :-------: |
|   <img src="https://user-images.githubusercontent.com/35261724/97651451-6dd91e80-1a9f-11eb-8baf-19d2fa93c77e.jpg" alt="img" height="150px" width="150px" /> |   <img src="https://avatars2.githubusercontent.com/u/57941049?s=460&u=b20800e6bc681bf4c683143cbcf11b9aa7dcf50c&v=4 =150x150" alt="img" height="150px" width="150px" />     | <img src="https://avatars1.githubusercontent.com/u/8137615?s=460&u=3cbc84a925ac49ae3603adbcff8b24b444e478da&v=4" alt="img" height="150px" width="150px" /> | <img src="https://avatars2.githubusercontent.com/u/59037261?s=460&u=7b7a0a2f151c1f49c5bc8068d4d6a5bf50c94c7b&v=4" alt="img" height="150px" width="150px" /> |
| ISFJ     | ISFP     | ISFJ    | ISFJ     |


<br />

## 🎁 배포 주소
http://118.67.132.237/

<br />

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
