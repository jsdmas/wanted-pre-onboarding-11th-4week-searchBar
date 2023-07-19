# wanted-pre-onboarding-11th-4week-searchBar

원티드 4주차 검색창 만들기 과제입니다.  
이름 : 장진호

# 배포 링크

[사이트 배포 링크](https://wanted-week3-search-bar.vercel.app/)

# 실행 방법

json서버는 glitch로 배포하였습니다  
(**때문에 초기에 api 응답이 10초정도 늦어질 수 있으며** 별도의 서버파일은 필요 없습니다.)

```
yarn install

yarn start
```

# API 호출별로 로컬 캐싱, expire time 구현

처음에는 localStorage, sessionStorage에 저장하는 방법도 생각했었지만 5 MB 크기의 문자열만 저장 가능하므로 캐싱에 사용하기에는 제약이 많다고 생각했습니다.  
그래서 캐싱 기능으로 cache Storage를 사용했습니다.

**apis/ServerApi.ts**

```ts
const BASE_URL = 'https://forested-torpid-carpet.glitch.me//sick';
const CACHE_TIME = 60 * 1000;
const CACHE_STORAGE = 'myCache';

export const getVaildResponse = async (params: string) => {
  const query = new URLSearchParams({ q: params }).toString();
  const url = `${BASE_URL}?${query}`;

  const cache = await caches.open(CACHE_STORAGE);
  const cacheResponse = await caches.match(url);

  if (cacheResponse) {
    const cachedData = await cacheResponse.json();
    if (Date.now() - cachedData.timestamp < CACHE_TIME) {
      return cachedData.data;
    }
  }

  return getFetchResponse(url, cache);
};

const getFetchResponse = async (url: string, cache: Cache) => {
  const response = await fetch(url);
  const data = await response.json();

  cache.put(url, new Response(JSON.stringify({ data, timestamp: Date.now() })));
  return data;
};
```

`getVaildResponse` 함수부터 설명하면 다음과 같습니다.

1. 저장되어있는 cache가 있는지 확인한다. (cache, cacheResponse)
2. 만약 저장되있는 cache가 있다면 저장한 캐시의 timestamp를 보고 재 요청할지 판단합니다.
3. 만약 저장시간이 초과되었거나 기존 저장데이터가 아니라면 `getFetchResponse` 함수로 넘어갑니다.
4. `getFetchResponse`에서는 서버에 요청하고 데이터, `expire time (timestamp)`을 cache 저장소에 저장합니다.

![](https://github.com/jsdmas/wanted-pre-onboarding-11th-4week-searchBar/assets/105098581/132e2ac1-e354-49b8-9c2c-227c8bcc0fc5)  
캐싱된 검색 요청들은 서버로 요청을 보내지않고 캐시 저장공간에서 꺼내 사용하게 됩니다.

# 입력마다 API 호출하지 않도록 API 호출 횟수를 줄이는 전략 수립 및 실행

디바운스는 특정 이벤트가 발생한 후 일정 시간이 지난 후에만 실제로 동작하는 함수를 만들기 위해 사용됩니다.  
이를 통해 불필요한 API 호출 횟수를 줄였습니다.

**utils/debounce.ts**

```ts
export function debounce(callback: any, delay: number = 1000) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback(...args), delay);
  };
}
```

- `callback`: 디바운스를 적용하려는 함수(원래 동작)입니다.
- `delay`: 디바운스의 대기 시간입니다.

debounce 함수는 클로저를 사용하여 내부 함수를 반환합니다.

**디바운스 작동 방식**

1. 내부 함수가 호출되면, 이전에 설정된 timeoutId를 clearTimeout 함수를 통해 취소합니다.
2. 그리고 새로운 setTimeout을 실행하여 delay 시간만큼 대기합니다.
3. 대기 시간이 지나면, 원래의 callback 함수가 인자들과 함께 실행됩니다.
4. callback 함수가 연속해서 호출되는 상황에서 마지막 호출 이후 delay 시간이 지난 후에만 실제로 callback 함수가 실행되게 됩니다.

# 키보드만으로 추천 검색어들로 이동 가능하도록 구현

**hooks/useKeyboard.tsx**

```tsx
type KeyboardProps = [
  ulRef: React.RefObject<HTMLUListElement>,
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void,
];

export default function useKeyboard(): KeyboardProps {
  const indexState = useIndexStateContext();
  const setIndexState = useSetIndexStateContext();
  const [, setValue] = useFieldContext();
  const ulRef = useRef<HTMLUListElement>(null);
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    const sickList = ulRef.current?.childElementCount ?? 0;
    if (sickList > 0) {
      switch (event.key) {
        case 'ArrowDown':
          setIndexState((prev) => (prev + 1 >= sickList ? 0 : prev + 1));
          break;
        case 'ArrowUp':
          setIndexState((prev) => (prev - 1 < 0 ? sickList - 1 : prev - 1));
          break;
        case 'Enter':
          {
            setIndexState(-1);
            const text = ulRef.current?.children[indexState]?.children[1].textContent ?? '';
            setValue((prev) => ({ ...prev, q: text }));
          }
          break;
      }
    }
  };

return [ulRef, handleKeyPress];
```

동작에 필요한 상태들은 context로 만들어 최대한 느슨하게 만들도록 노력하였습니다.

- `ulRef` : 검색요청 리스트를 나타낼떄의 부모태그를 지정합니다. 자식 요소들(데이터목록)의 개수를 판단하고 리스트의 text를 가져오도록 도와줍니다.

```tsx
<S.Ul ref={ulRef}>
```

구현하는데 아쉬웠던점은 Enter 를 누를시 가져오는 텍스트를 자동화하지 못한 점입니다.

- `handleKeyPress` : 키보드 이벤트가 일어날시 동작할 함수입니다. 사용하려는 검색창 input의 키보드 이벤트에 적용시키면 됩니다.

```tsx
<Input
  ...
  onKeyDown={handleKeyPress}
/>
```

# 구현 고민

- 나중에 검색목록 form state에 `확장`을 고려하여 context를 세세히 나누어 분할하였습니다.
- 어떻게 코드를 적어야 `읽기쉽고 유지보수`가 편할지 계속해서 고민했습니다.
  - 이번 과제에서는 제가 생각할수있는 최대한 코드를 `분할`하고 `재사용성, 확장성을 고려`하여 작성하였습니다.
