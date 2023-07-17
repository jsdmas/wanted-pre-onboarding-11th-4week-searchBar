import { useFieldContext } from '../../context/filed';

function SearchBar() {
  const [keyword, setKeyword] = useFieldContext();
  return (
    <input
      type="text"
      placeholder="질환명을 입력해 주세요"
      value={keyword}
      onChange={(event) => setKeyword((prev) => ({ ...prev, q: event.target.value }))}
    />
  );
}

export default SearchBar;
