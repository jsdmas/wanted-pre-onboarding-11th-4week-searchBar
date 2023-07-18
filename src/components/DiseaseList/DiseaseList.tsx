import { memo } from 'react';
import { useDataStateContext } from '../../context/data';

function DiseaseList() {
  const dataState = useDataStateContext();
  console.log('dataState');
  console.log(dataState);
  return <ul>모달</ul>;
}

export default memo(DiseaseList);
