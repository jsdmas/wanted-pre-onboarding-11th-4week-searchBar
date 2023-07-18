import React from 'react';
import { useFormStateContext, useSetFormStateContext } from '../context/form';
import { useSetDataStateContext } from '../context/data';
import { getFetchResponse } from '../apis/ServerApi';

function useDataSubmit() {
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const setDataState = useSetDataStateContext();
  const dataFetchEvent = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await getFetchResponse(formState.q).catch((error) => alert(error));
    console.log('submit-data');
    console.log(data);
    console.log('state');
    console.log(formState);
    setDataState(() => [...data]);
    setFormState((prev) => ({ ...prev, calling: prev.calling + 1 }));
  };
  return dataFetchEvent;
}

export default useDataSubmit;
