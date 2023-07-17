import React, { useCallback, useEffect } from 'react';
import { useFieldContext } from '../../context/filed';

import { useFormStateContext } from '../../context/form';
import { debounce } from '../../utils/debounce';
import { getFetchResponse } from '../../apis/ServerApi';
import useDataFetch from '../../hooks/useDataFetch';

function SearchBar() {
  const [value, setValue] = useFieldContext();
  const formState = useFormStateContext();
  const dataFeatchEvent = useDataFetch();
  const debouncedGetFetchResponse = useCallback(
    debounce(async () => {
      await getFetchResponse(formState);
      setValue((prev) => ({ ...prev, calling: prev.calling + 1 }));
    }, 1000),
    [],
  );

  const getDisease = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, q: event.target.value }));
    debouncedGetFetchResponse();
  };

  useEffect(() => {
    console.info(`calling api : ${formState.calling}`);
  }, [formState.calling]);

  return (
    <form onSubmit={dataFeatchEvent}>
      <input type="text" placeholder="질환명을 입력해 주세요" value={value} onChange={getDisease} />
    </form>
  );
}

export default SearchBar;
