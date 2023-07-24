import React from 'react';
import { styled } from 'styled-components';
import { GreenButton } from '../shared/Buttons';

function Modal(props) {
  const { name, handleOkBtn, handleCancelBtn, handleDelBtn, children } = props;

  return (
    <>
      <StModalBox>
        <StModalContents>
          <h3>{children}</h3>
          <ButtonContainer>
            <GreenButton onClick={name == 'delBtn' ? handleDelBtn : handleOkBtn}>확인</GreenButton>
            <GreenButton onClick={handleCancelBtn}>취소</GreenButton>
          </ButtonContainer>
        </StModalContents>
      </StModalBox>
    </>
  );
}

export default Modal;

const StModalBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StModalContents = styled.div`
  background-color: #fff;
  padding: 20px;
  width: 30%;
  height: 30%;
  border-radius: 12px;
  text-align: center;
  justify-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 10%;
  width: 100%;
  margin: 20px;
  gap: 10px;
`;
