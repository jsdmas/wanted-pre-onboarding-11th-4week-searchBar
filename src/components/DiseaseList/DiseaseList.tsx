import React from 'react';
import { useDataStateContext } from '../../context/data';
import * as S from './DiseaseList.style';
import { useFieldContext } from '../../context/filed';
import Sick from './Sick';

type Props = {
  ulRef: React.RefObject<HTMLUListElement>;
  currentIndex: number;
};

function DiseaseList({ ulRef, currentIndex }: Props) {
  const dataState = useDataStateContext();
  const [, setValue] = useFieldContext();
  const sickClick = (sickNm: string) => {
    setValue((prev) => ({ ...prev, q: sickNm }));
  };

  return (
    <S.Wrapper>
      <S.Span>{dataState.length > 0 ? '추천 검색어' : '검색어 없음'}</S.Span>
      <S.Ul ref={ulRef}>
        {dataState.slice(0, 7).map(({ sickNm, sickCd }, idx) => {
          return (
            <Sick
              key={sickCd}
              sickNm={sickNm}
              onClick={() => sickClick(sickNm)}
              isFocus={currentIndex === idx}
            />
          );
        })}
      </S.Ul>
    </S.Wrapper>
  );
}

export default DiseaseList;
