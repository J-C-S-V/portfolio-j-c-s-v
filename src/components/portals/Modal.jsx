import React from 'react';
import styled, { keyframes } from 'styled-components';

export function Modal({ children, estado }) {
  return (
    <>
      {estado && (
        <Overlay>
          <ContenedorModal>{children}</ContenedorModal>
        </Overlay>
      )}
    </>
  );
}

const fadeOut = keyframes`
0% {
  margin-left: 100%;
}

100% {
  margin-left: 0%;
}
`;

const Overlay = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  // margin-left: 100%;
  animation: ${fadeOut} 0.5s ease-in-out;
`;

const ContenedorModal = styled.div`
  display: flex;
  align-items: flex-end;
  width: 50%;
  min-height: 50%;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-left: -150px;
`;
