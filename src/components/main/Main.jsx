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
  console.log(mainImgMapper[step.toString()])

  return (
    <>
      <MainBox>
        {/* <ImgBox src={slidesData[step].img} /> */}
        <ContentBox>
          <TestBox>
            <TextBox>
            <h1 style={{fontSize: "40px"}}>{SlidesData[step]?.title}</h1>
            <p>{SlidesData[step]?.content}</p>
            </TextBox>
            <GreenButton onClick={() => handleTestBtnClick(step)}>테스트하기</GreenButton>
          </TestBox>
        </ContentBox>
        <LeftImg src={LeftBtn} onClick={handlePrevBtnClick} />
        <RightImg src={RightBtn} onClick={handleNextBtnClick} />
      </MainBox>
      <BackgroundImg imgRef= {mainImgMapper[step.toString()]}></BackgroundImg>
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

const BackgroundImg = styled.div`
        background-image: url(${(props) => (props.imgRef)});
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        min-height: 100vh;
        z-index: -1;
        background-position: center;
        background-size: cover;
`;

const TestBox = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
`;

const TextBox = styled.div`
  height: 200px;
  text-align: center;
  padding: 50px 100px 0px 100px;
  margin:150px 0 60px 0;
  white-space: pre-line;
`

const ContentBox = styled.div`
  width: 100%;
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

// const BtnBox = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center
// `

// const TestButton = styled.button`
//   width: 130px;
//   height: 60px;
//   padding: 10px;
//   font-weight: 600;
//   line-height: 40px;
//   color: #fff;
//   border: 2px solid #007144;
//   border-radius: 20px;
//   transition: all 0.2s;
//   background: #00ae68;
//   box-shadow: 0px 6px 0px 0px #007144;

//   &:hover {
//     cursor: pointer;
//     margin-top: 15px;
//     margin-bottom: 6px;
//     box-shadow: 0px 0px 0px 0px #007144;
//   }
// `;
