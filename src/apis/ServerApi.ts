import { ERROR_MESSAGE } from '../constants/ERROR_MESSAGE';
import { FormState } from '../context/form';

const BASE_URL = 'http://localhost:4000/sick';

export class ServerApi {
  async getFetchResponse(query: FormState) {
    const url = `${BASE_URL}`;
    console.log(query);
    const response = await fetch(`${url}`);
    console.log(response.ok);

    if (!response.ok) {
      throw new Error(ERROR_MESSAGE.FAIL_FETCH);
    }

    return response.json();
  }
}
