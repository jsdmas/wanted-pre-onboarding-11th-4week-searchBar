import { useState } from 'react';

function SearchBar() {
  const [value, setValue] = useState('');

  return (
    <form>
      <input value={value} onChange={(event) => setValue(event.currentTarget.value)} />
    </form>
  );
}

export default SearchBar;
