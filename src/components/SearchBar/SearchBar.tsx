import { useFieldContext } from '../../context/filed';

function SearchBar() {
  const [keyword, setKeyword] = useFieldContext();
  console.log(keyword);
  return (
    <input
      type="text"
      placeholder="질환명을 입력해 주세요"
      value={keyword}
      onChange={(event) => setKeyword((prev) => ({ ...prev, sickNm: event.target.value }))}
    />
  );
}

export default SearchBar;
