# wanted-pre-onboarding-11th-4week-searchBar

| 소개 | 임상시험에 대한 검색창, 검색어 추천 기능, 캐싱 기능 구현 (기업 과제) |
| --- | --- |
| 기간 | 23.07.16 ~ 23.07.19 (4일) |
| 인원 | 개인 프로젝트 |
| 저장소 | https://github.com/jsdmas/wanted-pre-onboarding-11th-4week-searchBar |

# 배포 링크
json서버는 glitch로 배포하였습니다  
(**때문에 초기에 api 응답이 10초정도 늦어질 수 있으며** 별도의 서버파일은 필요 없습니다.)   
만약 응답이 없을시 페이지 새로고침 부탁드립니다. ㅠ_ㅠ  
    
[사이트 배포 링크](https://wanted-week3-search-bar.vercel.app/)

# 실행 방법

json서버는 glitch로 배포하였습니다  
(**때문에 초기에 api 응답이 10초정도 늦어질 수 있으며** 별도의 서버파일은 필요 없습니다.)

```
yarn install

yarn start
```

## 📝 프로젝트 핵심 요구사항

- 질환명 검색시 API 호출 통해서 검색어 추천 기능 구현
- API 호출별로 로컬 캐싱 구현
- 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행
- 키보드만으로 추천 검색어들로 이동 가능하도록 구현

## 💾 **기술 스택**

- Style : `Emotion`
- Language : `TypeScript`
- Interface : `React.js`

## **💻 핵심 구현 기능**

- cache기능 구현
    
    - API 호출시 네트워크 비용을 절약하기 위해 cache Storage를 사용하여 캐싱기능을 구현하였습니다.
    
    localStorage, sessionStorage에 저장하는 방법도 생각했었지만 저장 용량이 5MB까지 저장 가능하므로 나중에라도 데이터 내용이 확장된다면 캐싱에 사용하기에는 제약이 많다고 생각하여 **cache Storage**를 사용했습니다.
    
    동일한 API를 반복적으로 요청하는 것은 **불필요한 네트워크 비용을 발생**시키고 사용자 편의성 측면에서도 **검색어를 보여주기까지 시간**이 걸리므로 좋지 않다고 판단하여 cache기능을 구현하고 **expire time**을 적용하여 최신 데이터를 유지할 수 있도록 하였습니다.
    
    [](https://www.notion.so/9eba8b6f510b4a96af5ed95b009cce7e?pvs=4#1948e246f7dd4dcfbd8c58383200d385)
    
- API 호출 최적화를 위한 debounce 구현
    
    - 검색어 입력시 API요청을 최적화 하기위해 debounce를 적용하였습니다.
    
    input 값이 바뀔때마다 api를 요청하게 된다면 불필요한 요청을 보내게되어 **네트워크 비용이 증가하게 됩니다.** 이를 해결하기 위해 **값이 변경된 후 일정 시간이 지난 후에만 API를 요청하도록 동작하는 debounce**를 구현하여 **네트워크 요청을 최적화** 하였습니다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/704a2f73-bcd0-476f-881b-90cdd3fb7c29/Untitled.gif)
    
- 키보드 이벤트를 구현하여 사용자 편의성 개선
    
    - 사용자 편의성을 위해 키보드 방향키(위, 아래), Enter 입력시 검색어가 선택되도록 구현하였습니다.
    
    window객체를 이용하여 키보드 이벤트를 구현할 경우 의도치않은 **사이드 이펙트** 가 발생할 수 있기 때문에 input의 **keyDown** 이벤트를 이용하여 지정한 키보드 이벤트 발생시 데이터를 선택할 수 있도록 하였습니다.
    
    ![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9b8b6054-2ef7-4fda-a472-a5f532c17205/Untitled.gif)
    

### ‼️ **깨달은 점**

- **cache Storage API** 사용법을 숙지하고 **cache의 개념**을 이해
- 모달 창을 구현하고 바깥 클릭으로 닫는 기능을 추가함으로써 **사용자 편의 개선 경험**

# Git commit message

| 유형   | 의미               |
| ------ | ------------------ |
| chore  | 세팅관련 수정      |
| Docs   | 문서관련 수정      |
| Feat   | 새로운 기능 추가   |
| Fix    | 버그, 기능 수정    |
| Remove | 파일 삭제          |
| Style  | 스타일 관련만 수정 |

# 폴더구조

```
📦src
├── 📂components  - 컴포넌트 모음
│   └── 📂DiseaseList
│   └── 📂SearchBar
│   └── 📂Modal
│   └── Layout.tsx
│   └── Header.tsx
├── 📂api
├── 📂context
│   └── Data.tsx - 질병 데이터 관리
│   └── filed.tsx - 검색창 상태 관리
│   └── form.tsx - 검색어, callApi 관리
│   └── indexState.tsx - 질병 리스트 숫자(index) 관리
├── 📂hooks
│   └── useDataSubmit.tsx - submit 이벤트
│   └── useFiledProcess.tsx - input change event, 요구사항(callingApi횟수) 관리
│   └── useKeyboard.tsx - 키보드 이벤트 관리
│   └── useModal.tsx - 모달창 관리
├── 📂utils
│   └── debounce.ts
├── 📂styles
├── 📂pages
├── App.tsx
└── index.tsx
```

# 구현 고민

- 나중에 검색목록 form state에 `확장`을 고려하여 context를 세세히 나누어 분할하였습니다.
- 어떻게 코드를 적어야 `읽기쉽고 유지보수`가 편할지 계속해서 고민했습니다.
  - 이번 과제에서는 제가 생각할수있는 최대한 코드를 `분할`하고 `재사용성, 확장성을 고려`하여 작성하였습니다.
