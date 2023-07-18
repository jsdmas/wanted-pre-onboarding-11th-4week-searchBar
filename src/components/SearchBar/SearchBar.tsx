import useModal from '../../hooks/useModal';
import useDataSubmit from '../../hooks/useDataSubmit';
import useFiledProcess from '../../hooks/useFiledProcess';
import Modal from '../Modal/Modal';
import DiseaseList from '../DiseaseList/DiseaseList';

function SearchBar() {
  const [value, setDisease] = useFiledProcess();
  const diseaseSubmitEvent = useDataSubmit();
  const { isClick, setIsClick, modalRef, modalOutSideClick } = useModal();

  return (
    <>
      <form onSubmit={diseaseSubmitEvent}>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요"
          value={value}
          onChange={setDisease}
          onClick={() => setIsClick(true)}
        />
      </form>
      {isClick && (
        <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick}>
          <DiseaseList />
        </Modal>
      )}
    </>
  );
}

export default SearchBar;
