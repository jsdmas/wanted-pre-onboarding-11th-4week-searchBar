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
