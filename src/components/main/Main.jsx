import React from 'react';
import { styled } from 'styled-components';
import MbtiTest from '../../del/test';
import { useNavigate } from 'react-router';
import { PinkButton, PurpleButton } from '../../shared/Buttons';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <MbtiTest />
      <h1>어떤 동물을 닮았을까?</h1>
      <PurpleButton onClick={() => navigate('/animal')}>테스트 시작</PurpleButton>
    </>
  );
}

export default Main;

