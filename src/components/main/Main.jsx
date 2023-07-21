import React from 'react';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router';
import { PinkButton, PurpleButton } from '../../shared/Buttons';
import mainIcon from '../../assets/mainIcon.png';
import subImage from '../../assets/subImage.png';
import workImg from '../../assets/workImg.png';
import imageImage from '../../assets/imageImage.png';
import VacationImg from '../../assets/VacationImg.png';
import EandI from '../../assets/EandI.png';

function Main() {
  const navigate = useNavigate();

  return (
    <>
      <TopBox>
        <MainImg src={mainIcon} onClick={() => navigate('/freeBoard')} />
      </TopBox>
      <TestBox>
        <TestImg src={subImage} onClick={() => navigate('/animal')} />
        <TestImg src={workImg} onClick={() => navigate('/workSurvive')} />
        <TestImg src={imageImage} onClick={() => navigate('/image-test')} />
        <TestImg src={VacationImg} onClick={() => navigate('/Vacation')} />
        <TestImg src={EandI} onClick={() => navigate('/Personality')} />
      </TestBox>
    </>
  );
}

export default Main;

const TopBox = styled.div`
  text-align: center;
`;

const MainImg = styled.img`
  width: 300px;
  display: flex;
  margin: 30px auto;
  margin-bottom: 100px;

  &:hover {
    cursor: pointer;
  }
`;

const TestImg = styled.img`
  width: 150px;
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`;

const TestBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 70px;
`;
