import { ERROR_MESSAGE } from '../constants/ERROR_MESSAGE';

const BASE_URL = 'http://localhost:4000/sick';

export const getFetchResponse = async (params: string) => {
  const url = `${BASE_URL}`;
  const query = new URLSearchParams({ q: params }).toString();
  console.log('query');
  console.log(query);
  const response = await fetch(`${url}?${query}`);
  if (!response.ok) {
    throw new Error(ERROR_MESSAGE.FAIL_FETCH);
  }

  return response.json();
};
