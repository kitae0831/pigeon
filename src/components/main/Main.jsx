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
      <div>
        <h1>어떤 동물을 닮았을까?</h1>
        <PurpleButton onClick={() => navigate('/animal')}>테스트 시작</PurpleButton>
      </div>
      <div>
        <h1>선호하는 휴가 장소는?</h1>
        <PurpleButton onClick={() => navigate('/Vacation')}>테스트 시작</PurpleButton>
      </div>
    </>
  );
}

export default Main;
