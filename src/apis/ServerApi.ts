import { ERROR_MESSAGE } from '../constants/ERROR_MESSAGE';
import { FormState } from '../context/form';
import { transformQuery } from '../utils/transformQuery';

const BASE_URL = 'http://localhost:4000/sick';

export const getFetchResponse = async (params: FormState) => {
  const url = `${BASE_URL}`;
  const query = transformQuery(params);

  const response = await fetch(`${url}?${query}`);
  if (!response.ok) {
    throw new Error(ERROR_MESSAGE.FAIL_FETCH);
  }

  return response.json();
};
