import { ERROR_MESSAGE } from '../constants/ERROR_MESSAGE';
import { FormState } from '../context/form';

const BASE_URL = 'http://localhost:4000/sick';

export const getFetchResponse = async (params: FormState) => {
  const url = `${BASE_URL}`;
  const query = new URLSearchParams({ q: params.q }).toString();
  console.log('query');
  console.log(query);
  const response = await fetch(`${url}?${query}`);
  if (!response.ok) {
    throw new Error(ERROR_MESSAGE.FAIL_FETCH);
  }

  return response.json();
};
