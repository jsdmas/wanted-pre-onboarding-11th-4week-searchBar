import { memo } from 'react';
import { useDataStateContext } from '../../context/data';

function DiseaseList() {
  const dataState = useDataStateContext();
  console.log('dataState');
  console.log(dataState);
  return <div>모달</div>;
}

export default memo(DiseaseList);
