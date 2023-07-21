import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const TestModal = ({ onClose, children }) => {
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <button onClick={onClose}>알겠습니다.</button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default TestModal;
