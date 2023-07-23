import React, { useState } from 'react';
import styled from 'styled-components';
import LeftBtn from '../../assets/leftArrow.png';
import RightBtn from '../../assets/rightArrow.png';
import { GreenButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router';
import { SlidesData } from '../main/SlidesData';

function Main() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const mainImgMapper = {
    0: SlidesData[0].img,
    1: SlidesData[1].img,
    2: SlidesData[2].img,
    3: SlidesData[3].img,
    4: SlidesData[4].img
  };
  const handleTestBtnClick = (step) => {
    switch (step) {
      case 0:
        return navigate('/animal');
      case 1:
        return navigate('/work-survive');
      case 2:
        return navigate('/vacation');
      case 3:
        return navigate('/image-test');
      case 4:
        return navigate('/personality');
      default:
        return navigate('/');
    }
  };
  const handlePrevBtnClick = () => {
    if (step === 0) {
      setStep(4);
    } else {
      setStep(step - 1);
    }
  };
  const handleNextBtnClick = () => {
    if (step === 4) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };
  return (
    <>
      <MainBox>
        <ContentBox>
          <TestBox>
            <TextBox>
              <MainTitle>{SlidesData[step]?.title}</MainTitle>
              <p>{SlidesData[step]?.content}</p>
            </TextBox>
            <GreenButton onClick={() => handleTestBtnClick(step)}>테스트하기</GreenButton>
          </TestBox>
        </ContentBox>
        <LeftImg src={LeftBtn} onClick={handlePrevBtnClick} />
        <RightImg src={RightBtn} onClick={handleNextBtnClick} />
      </MainBox>
      <SlideContainer step={step}>
        {Object.values(mainImgMapper).map((img) => (
          <BackgroundImg bgimage={img} key={img} />
        ))}
      </SlideContainer>
    </>
  );
}
export default Main;

const SlideContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  display: flex;
  width: 500%;

  transform: translateX(${({ step }) => step * -20}%);
  transition: transform 0.7s ease-in-out;
`;

const MainBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const BackgroundImg = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;

  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.bgimage});
`;

const TestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitle = styled.h1`
  font-size: 40px;
`;

const TextBox = styled.div`
  height: 200px;
  text-align: center;
  padding: 50px 100px 0px 100px;
  margin: 150px 0 60px 0;
  white-space: pre-line;
`;

const ContentBox = styled.div`
  width: 100%;
`;

const LeftImg = styled.img`
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 50%;
  left: 0.5rem;

  border-radius: 100px;
  cursor: pointer;
`;

const RightImg = styled.img`
  width: 50px;
  height: 50px;

  position: fixed;
  bottom: 50%;
  right: 0.5rem;
  border-radius: 100px;

  cursor: pointer;
`;
