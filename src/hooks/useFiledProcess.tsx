import React, { useCallback, useEffect } from 'react';
import { useSetDataStateContext } from '../context/data';
import { useFieldContext } from '../context/filed';
import { FormState, useFormStateContext } from '../context/form';
import { getFetchResponse } from '../apis/ServerApi';
import { debounce } from '../utils/debounce';

function useFiledProcess() {
  const [value, setValue] = useFieldContext();
  const formState = useFormStateContext();
  const setDataState = useSetDataStateContext();

  const debouncedGetFetchResponse = useCallback(
    debounce(async (formState: FormState) => {
      const data = await getFetchResponse(formState);
      setDataState(() => [...data]);
      setValue((prev) => ({ ...prev, calling: prev.calling + 1 }));
    }, 1000),
    [],
  );

  const getDisease = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, q: event.target.value }));
  };

  useEffect(() => {
    console.info(`calling api : ${formState.calling}`);
  }, [formState.calling]);

  useEffect(() => {
    debouncedGetFetchResponse(formState);
  }, [formState.q]);

  return [value, getDisease] as const;
}

export default useFiledProcess;
