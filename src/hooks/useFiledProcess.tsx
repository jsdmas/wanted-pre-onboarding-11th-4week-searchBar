import { useCallback, useEffect } from 'react';
import { useSetDataStateContext } from '../context/data';
import { useFieldContext } from '../context/filed';
import { useFormStateContext, useSetFormStateContext } from '../context/form';
import { getFetchResponse } from '../apis/ServerApi';
import { debounce } from '../utils/debounce';

function useFiledProcess() {
  const [value, setValue] = useFieldContext();
  const formState = useFormStateContext();
  const setFormState = useSetFormStateContext();
  const setDataState = useSetDataStateContext();

  const debouncedGetFetchResponse = useCallback(
    debounce(async (formState: string) => {
      const data = await getFetchResponse(formState);
      setDataState(() => [...data]);
      setValue((prev) => ({ ...prev, calling: prev.calling + 1 }));
    }, 1000),
    [setDataState, setValue, debounce],
  );

  useEffect(() => {
    console.info(`calling api : ${formState.calling}`);
  }, [formState.calling]);

  useEffect(() => {
    if (formState.q.trim() === '') {
      setDataState([]);
      setFormState((prev) => ({ ...prev, q: '' }));
      return;
    }
    debouncedGetFetchResponse(formState.q.trim());
  }, [formState.q, debouncedGetFetchResponse, setFormState, setDataState]);

  return [value, setValue] as const;
}

export default useFiledProcess;
