import React from 'react';
import { useFormStateContext, useSetFormStateContext } from '../context/form';
import { useSetDataStateContext } from '../context/data';
import { getFetchResponse } from '../apis/ServerApi';

function useDataFetch() {
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const setDataState = useSetDataStateContext();
  const dataFetchEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getFetchResponse(formState).catch((error) => alert(error));
    console.log('data');
    console.log(data);
    console.log('state');
    console.log(formState);
    setFormState((prev) => ({ ...prev, calling: prev.calling + 1 }));
    setDataState(() => [...data]);
  };
  return dataFetchEvent;
}

export default useDataFetch;
