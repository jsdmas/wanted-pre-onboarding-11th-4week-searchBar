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
  width: 200px;
  height: 300px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export default Modal;
