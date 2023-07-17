import { FormState } from '../context/form';

export const transformQuery = (params: FormState) => {
  const query = new URLSearchParams(params).toString();
  return query;
};
