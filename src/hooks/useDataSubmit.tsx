import React from 'react';
import { useFormStateContext, useSetFormStateContext } from '../context/form';
import { useSetDataStateContext } from '../context/data';
import { getVaildResponse } from '../apis/ServerApi';

function useDataSubmit() {
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const setDataState = useSetDataStateContext();
  const dataFetchEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.q.trim() === '') return setFormState((prev) => ({ ...prev, q: '' }));
    const data = await getVaildResponse(formState.q).catch((error) => alert(error));
    setDataState(() => [...data]);
    setFormState((prev) => ({ ...prev, calling: prev.calling + 1 }));
  };
  return dataFetchEvent;
}

export default useDataSubmit;
