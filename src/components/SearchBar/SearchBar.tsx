import { useState } from 'react';

function SearchBar() {
  const [value, setValue] = useState('');

  return <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />;
}

export default SearchBar;
