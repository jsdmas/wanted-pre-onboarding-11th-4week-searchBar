import React, { useCallback } from 'react';
import { useFieldContext } from '../../context/filed';

import { useFormStateContext } from '../../context/form';
import { debounce } from '../../utils/debounce';
import { getFetchResponse } from '../../apis/ServerApi';

function SearchBar() {
  const [keyword, setKeyword] = useFieldContext();
  const formState = useFormStateContext();
  const debouncedGetFetchResponse = useCallback(
    debounce(() => getFetchResponse(formState), 1000),
    [formState],
  );

  const getDisease = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword((prev) => ({ ...prev, q: event.target.value }));
    debouncedGetFetchResponse();
  };
  console.log(formState);
  return (
    <input type="text" placeholder="질환명을 입력해 주세요" value={keyword} onChange={getDisease} />
  );
}

export default SearchBar;
