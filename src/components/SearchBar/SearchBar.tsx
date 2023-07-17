import useDataFetch from '../../hooks/useDataFetch';
import useFiledProcess from '../../hooks/useFiledProcess';

function SearchBar() {
  const [value, getDisease] = useFiledProcess();
  const dataFeatchEvent = useDataFetch();

  return (
    <form onSubmit={dataFeatchEvent}>
      <input type="text" placeholder="질환명을 입력해 주세요" value={value} onChange={getDisease} />
    </form>
  );
}

export default SearchBar;
