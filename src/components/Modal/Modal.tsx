import styled from '@emotion/styled';
import React from 'react';

interface Props {
  modalRef: React.ForwardedRef<HTMLDivElement>;
  modalOutSideClick: (e: any) => void;
  children?: React.ReactNode;
}

function Modal({ modalRef, modalOutSideClick, children }: Props) {
  return (
    <Layer ref={modalRef} onClick={(e) => modalOutSideClick(e)}>
      <ModalLayer>{children}</ModalLayer>
    </Layer>
  );
}

const Layer = styled.div`
  z-index: 1500;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const ModalLayer = styled.div`
  z-index: 2000;
  width: 470px;
  border-radius: 20px;
  height: 345px;
  position: absolute;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.1);
  top: 72%;
  left: 50%;
  background-color: white;
  transform: translate(-50%, -50%);
`;
export default Modal;
