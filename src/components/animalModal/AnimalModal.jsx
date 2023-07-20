import { useRef } from 'react';
import styled from 'styled-components';

export const Modal = ({ children, isOpen, setIsOpen }) => {
  const innerRef = useRef(null);

  return (
    <Outer
      onClick={(event) => {
        if (!innerRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      }}
    >
      <Inner ref={innerRef}>
        {children}
        <button onClick={() => setIsOpen(false)}>닫기</button>
      </Inner>
    </Outer>
  );
};

const Outer = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Inner = styled.div`
  display: flex;
  flex-direction: column;

  padding: 24px;

  background-color: #ffffff;

  border-radius: 24px;
`;
