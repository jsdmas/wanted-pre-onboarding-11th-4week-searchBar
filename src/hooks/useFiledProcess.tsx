import { useCallback, useEffect } from 'react';
import { useSetDataStateContext } from '../context/data';
import { useFieldContext } from '../context/filed';
import { useFormStateContext, useSetFormStateContext } from '../context/form';
import { debounce } from '../utils/debounce';
import { getVaildResponse } from '../apis/ServerApi';

function useFiledProcess() {
  const [value, setValue] = useFieldContext();
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const setDataState = useSetDataStateContext();

  const debouncedGetFetchResponse = useCallback(
    debounce(async (formState: string) => {
      const data = await getVaildResponse(formState);
      setDataState(() => [...data]);
      setValue((prev) => ({ ...prev, calling: prev.calling + 1 }));
    }, 300),
    [setDataState, setValue, debounce],
  );

  useEffect(() => {
    console.info(`calling api : ${formState.calling}`);
  }, [formState.calling]);

  useEffect(() => {
    if (formState.q.trim() === '') {
      return;
    }
    debouncedGetFetchResponse(formState.q.trim());
  }, [formState.q, debouncedGetFetchResponse, setFormState, setDataState]);

  return [value, setValue] as const;
}

export default useFiledProcess;
