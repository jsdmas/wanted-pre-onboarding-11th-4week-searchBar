import React, { useCallback, useEffect } from 'react';
import { useFieldContext } from '../../context/filed';

import { FormState, useFormStateContext } from '../../context/form';
import { debounce } from '../../utils/debounce';
import { getFetchResponse } from '../../apis/ServerApi';
import useDataFetch from '../../hooks/useDataFetch';
import { useSetDataStateContext } from '../../context/data';

function SearchBar() {
  const [value, setValue] = useFieldContext();
  const formState = useFormStateContext();
  const setDataState = useSetDataStateContext();
  const dataFeatchEvent = useDataFetch();

  const debouncedGetFetchResponse = useCallback(
    debounce(async (formState: FormState) => {
      const data = await getFetchResponse(formState);
      setDataState(() => [...data]);
      setValue((prev) => ({ ...prev, calling: prev.calling + 1 }));
    }, 1500),
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

  return (
    <form onSubmit={dataFeatchEvent}>
      <input type="text" placeholder="질환명을 입력해 주세요" value={value} onChange={getDisease} />
    </form>
  );
}

export default SearchBar;
