import React, { useCallback } from 'react';
import { useFieldContext } from '../../context/filed';

import { useFormStateContext } from '../../context/form';
import { debounce } from '../../utils/debounce';
import { getFetchResponse } from '../../apis/ServerApi';

function SearchBar() {
  const [value, setValue] = useFieldContext();
  const formState = useFormStateContext();
  const debouncedGetFetchResponse = useCallback(
    debounce(async () => await getFetchResponse(formState), 1000),
    [],
  );

  const getDisease = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((prev) => ({ ...prev, q: event.target.value }));
    debouncedGetFetchResponse();
  };

  return (
    <input type="text" placeholder="질환명을 입력해 주세요" value={value} onChange={getDisease} />
  );
}

export default SearchBar;
