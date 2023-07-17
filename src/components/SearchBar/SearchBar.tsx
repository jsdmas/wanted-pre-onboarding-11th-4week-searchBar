import { useState } from 'react';

function SearchBar() {
  const [keyword, setKeyword] = useState('');

  return <input value={keyword} onChange={(event) => setKeyword(event.currentTarget.value)} />;
}

export default SearchBar;
