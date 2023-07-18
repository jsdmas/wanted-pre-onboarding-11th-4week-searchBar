import { memo } from 'react';
import { useDataStateContext } from '../../context/data';
import * as S from './DiseaseList.style';
import { useFieldContext } from '../../context/filed';
import Sick from './Sick';

function DiseaseList() {
  const dataState = useDataStateContext();
  const [, setValue] = useFieldContext();
  // TODO: 클릭시 submit 필요
  // TODO: 키보드로 움직이게 하는 기능 필요
  const sickClick = (sickNm: string) => {
    setValue((prev) => ({ ...prev, q: sickNm }));
  };

  return (
    <S.Wrapper>
      <S.Span>{dataState.length > 0 ? '추천 검색어' : '검색어 없음'}</S.Span>
      <S.Ul>
        {dataState.map((item) => {
          return (
            <Sick key={item.sickCd} sickNm={item.sickNm} onClick={() => sickClick(item.sickNm)} />
          );
        })}
      </S.Ul>
    </S.Wrapper>
  );
}

export default memo(DiseaseList);
