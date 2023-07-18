import useModal from '../../hooks/useModal';
import useDataSubmit from '../../hooks/useDataSubmit';
import useFiledProcess from '../../hooks/useFiledProcess';
import Modal from '../Modal/Modal';

function SearchBar() {
  const [value, getDisease] = useFiledProcess();
  const dataFeatchEvent = useDataSubmit();
  const { isClick, setIsClick, modalRef, modalOutSideClick } = useModal();

  return (
    <>
      <form onSubmit={dataFeatchEvent}>
        <input
          type="text"
          placeholder="질환명을 입력해 주세요"
          value={value}
          onChange={getDisease}
          onClick={() => setIsClick(true)}
        />
      </form>
      {isClick && (
        <Modal modalRef={modalRef} modalOutSideClick={modalOutSideClick}>
          모달
        </Modal>
      )}
    </>
  );
}

export default SearchBar;
