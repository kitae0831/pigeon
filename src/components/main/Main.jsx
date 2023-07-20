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
      <h1>자신의 성격은 어떤 동물을 닮았을까?</h1>
      <PurpleButton onClick={() => navigate('/animal')}>테스트 시작</PurpleButton>
      <h1>출근길에서 살아남기 테스트</h1>
      <PurpleButton onClick={() => navigate('/workSurvive')}>테스트 시작</PurpleButton>
    </>
  );
}

export default Main;
