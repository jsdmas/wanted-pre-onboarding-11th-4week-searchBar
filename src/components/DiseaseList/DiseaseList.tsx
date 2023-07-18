import { memo } from 'react';
import { useDataStateContext } from '../../context/data';
import * as S from './DiseaseList.style';
import { useFieldContext } from '../../context/filed';
import getSessionStorageData from '../../utils/sessionStorage';

function DiseaseList() {
  const dataState = useDataStateContext();
  const [value, setValue] = useFieldContext();
  // TODO: 클릭시 submit 필요
  // TODO: 키보드로 움직이게 하는 기능 필요
  const sickClick = (sickNm: string) => {
    setValue((prev) => ({ ...prev, q: sickNm }));
  };
  const sessionStorageData = getSessionStorageData();
  console.log('dataState');
  console.log(dataState);
  return (
    <S.Wrapper>
      <S.Span>
        {sessionStorageData.length > 0 ? '최근 검색어' : value ? '추천 검색어' : '검색어 없음'}
      </S.Span>
      <S.Ul>
        {dataState.map((item) => {
          return (
            <S.Li key={item.sickCd} onClick={() => sickClick(item.sickNm)}>
              <S.Svg
                viewBox="0 0 16 16"
                fill="gray"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
              </S.Svg>
              <S.Sick>{item.sickNm}</S.Sick>
            </S.Li>
          );
        })}
      </S.Ul>
    </S.Wrapper>
  );
}

export default memo(DiseaseList);
