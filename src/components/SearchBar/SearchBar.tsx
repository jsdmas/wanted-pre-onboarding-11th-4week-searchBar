import useModal from '../../hooks/useModal';
import useDataSubmit from '../../hooks/useDataSubmit';
import useFiledProcess from '../../hooks/useFiledProcess';
import Modal from '../Modal/Modal';
import DiseaseList from '../DiseaseList/DiseaseList';
import * as S from './SearchBar.style';

function SearchBar() {
  const [value, setDisease] = useFiledProcess();
  const diseaseSubmitEvent = useDataSubmit();
  const { isClick, setIsClick, modalRef, modalOutSideClick } = useModal();

  return (
    <>
      <S.Form onSubmit={diseaseSubmitEvent}>
        <S.Input
          type="text"
          placeholder="질환명을 입력해 주세요"
          value={value}
          onChange={setDisease}
          onClick={() => setIsClick(true)}
        />
        <S.Button type="submit">
          <S.Svg
            viewBox="0 0 16 16"
            width="24px"
            height="24px"
            fill="white"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.56 0a6.56 6.56 0 015.255 10.49L16 14.674 14.675 16l-4.186-4.184A6.56 6.56 0 116.561 0zm0 1.875a4.686 4.686 0 100 9.372 4.686 4.686 0 000-9.372z"></path>
          </S.Svg>
        </S.Button>
      </S.Form>
      {isClick && (
        <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick}>
          <DiseaseList />
        </Modal>
      )}
    </>
  );
}

export default SearchBar;
