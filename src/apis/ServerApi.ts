const BASE_URL = 'http://localhost:4000/sick';

export const getVaildResponse = async (params: string) => {
  const query = new URLSearchParams({ q: params }).toString();
  const url = `${BASE_URL}?${query}`;

  const cache = await caches.open('myCache');

  const cacheResponse = await caches.match(url);

  if (cacheResponse) {
    const cachedData = await cacheResponse.json();
    if (Date.now() - cachedData.timestamp < 10 * 1000) {
      return cachedData.data;
    }
  }

  return getFetchResponse(url, cache);
};

const getFetchResponse = async (url: string, cache?: Cache) => {
  const response = await fetch(url);
  const data = await response.json();

  cache?.put(url, new Response(JSON.stringify({ data, timestamp: Date.now() })));
  console.log('data-api 요청');
  return data;
};
