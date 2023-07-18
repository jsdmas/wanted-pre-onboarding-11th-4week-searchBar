import { useRef, useState } from 'react';

function useModal() {
  const [isClick, setIsClick] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const modalOutSideClick = (e: any) => {
    if (modalRef.current === e.target) {
      setIsClick(false);
    }
  };

  return { isClick, setIsClick, modalOutSideClick, modalRef };
}

export default useModal;
