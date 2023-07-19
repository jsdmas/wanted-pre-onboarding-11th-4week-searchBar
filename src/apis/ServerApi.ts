const BASE_URL = 'http://localhost:4000/sick';

export const getVaildResponse = async (params: string) => {
  const query = new URLSearchParams({ q: params }).toString();
  const url = `${BASE_URL}?${query}`;

  const cache = await caches.open('myCache'); // 캐시 저장소 열기

  const cacheResponse = await caches.match(url);
  return cacheResponse ? cacheResponse.json() : getFetchResponse(url, cache);
};

const getFetchResponse = async (url: string, cache?: Cache) => {
  const response = await fetch(url);

  cache?.put(url, response.clone()); // 캐시 저장

  return response.json();
};
