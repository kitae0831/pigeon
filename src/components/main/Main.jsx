import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { slidesData } from '../main/SlidesData';
import styled from 'styled-components';
import LeftBtn from '../../assets/leftArrow.png';
import RightBtn from '../../assets/rightArrow.png';
import { useNavigate } from 'react-router';
import dollTree from '../../assets/testImg/dollTree.jpg';
import greenTree1 from '../../assets/testImg/greenTree1.jpg';
import greenTree2 from '../../assets/testImg/greenTree2.jpg';
import greenTree3 from '../../assets/testImg/greenTree3.jpg';
import lemonTree1 from '../../assets/testImg/lemonTree.jpg';
import { SlidesData } from '../main/SlidesData';

function Main() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  // const mainImgMapper = {
  //   0: dollTree,
  //   1: greenTree1,
  //   2: greenTree2,
  //   3: greenTree3,
  //   4: lemonTree1
  // };
  const mainImgMapper = {
    0: SlidesData[0].img,
    1: SlidesData[1].img,
    2: SlidesData[2].img,
    3: SlidesData[3].img,
    4: SlidesData[4].img
  };
  console.log(step);
  console.log('이미지', mainImgMapper[step.toString()]);

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
      <div
        style={{
          // border: '3px solid black',
          // backgroundColor: 'black',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          // bottom: '0',
          // left: '0',
          minHeight: '100vh',

          zIndex: '-1',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundImage: `url("${mainImgMapper[step.toString()]}")`
        }}
      ></div>
      <MainBox>
        {/* <ImgBox src={slidesData[step].img} /> */}
        <ContentBox>
          <TestBox>
            <h3>{SlidesData[step]?.title}</h3>
            <p>{SlidesData[step]?.content}</p>
            <TestButton onClick={() => handleTestBtnClick(step)}>테스트하기</TestButton>
          </TestBox>
        </ContentBox>
        <LeftImg src={LeftBtn} onClick={handlePrevBtnClick} />
        <RightImg src={RightBtn} onClick={handleNextBtnClick} />
      </MainBox>
    </>
  );
}

export default Main;

const MainBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  // flex-direction: column;
  // align-items: center;

  /* background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(252, 247, 247, 0.3)); */
  /* background-position: center;
  background-size: cover; */
`;

// const ImgBox = styled.img`
//   width: 100%;
//   height: 800px;
//   position: absolute;

//   top: 0;
//   left: 0;

//   z-index: -1;
// `;

const TestBox = styled.div`
  position: fixed;
  bottom: 20%;
  right: 8rem;
  max-width: 420px;
  text-align: center;
`;

const ContentBox = styled.div`
  display: grid;
  align-items: bottom;
`;

// const ButtonSet = styled.div`
//   display: flex;
//   justify-content: space-between;
//   padding: 24px;
//   background-color: none;
//   color: black;
//   position: absolute;
//   width: 100%;
//   box-sizing: border-box;
// `;

// const Img = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 100px;
//   cursor: pointer;
// `;

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

const TestButton = styled.button`
  position: relative;
  display: block;
  float: left;
  width: 130px;
  height: 60px;
  padding: 0;
  margin: 10px 20px 10px 0;
  font-weight: 600;
  // text-align: center;
  align-items: center;
  line-height: 40px;
  color: #fff;
  border: 2px solid #007144;
  border-radius: 20px;
  transition: all 0.2s;
  background: #00ae68;
  box-shadow: 0px 6px 0px 0px #007144;

  &:hover {
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 6px;
    box-shadow: 0px 0px 0px 0px #007144;
  }
`;
