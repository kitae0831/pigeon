import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import cityImg from '../assets/cityImg.png';
import SeaVacationImg from '../assets/SeaVacationImg.png';
import mountinVacationImg from '../assets/mountinVacationImg.png';
import valleyImg from '../assets/valleyImg.png';

function VacationResult() {
  const location = useLocation();
  const selectedAnswers = location.state?.selectedAnswers || {};

  const resultHandler = () => {
    const answerA = Object.values(selectedAnswers).filter((choice) => choice === 1).length;
    const answerB = Object.values(selectedAnswers).filter((choice) => choice === 2).length;
    const answerC = Object.values(selectedAnswers).filter((choice) => choice === 3).length;
    const answerD = Object.values(selectedAnswers).filter((choice) => choice === 4).length;

    let result = '';
    if (answerA >= answerB && answerA >= answerC && answerA >= answerD) {
      result = '바다';
    } else if (answerB >= answerA && answerB >= answerC && answerB >= answerD) {
      result = '산';
    } else if (answerC >= answerA && answerC >= answerB && answerC >= answerD) {
      result = '계곡';
    } else {
      result = '도시';
    }

    return result;
  };

  const renderVacationImage = () => {
    const result = resultHandler();
    let vacationImg = null;

    switch (result) {
      case '바다':
        vacationImg = SeaVacationImg;
        break;
      case '산':
        vacationImg = mountinVacationImg;
        break;
      case '계곡':
        vacationImg = valleyImg;
        break;
      default:
        vacationImg = cityImg;
    }

    return <img src={vacationImg} alt={result} />;
  };

  return (
    <>
      <ResultContainer>
        <div>
          <VacationImgWrapper>{renderVacationImage()}</VacationImgWrapper>
          <h2>당신에게 맞는 휴가지는 {resultHandler()}입니다!</h2>
        </div>
      </ResultContainer>
    </>
  );
}

export default VacationResult;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 20px;
`;

const VacationImgWrapper = styled.div`
  img {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    width: 500px;
    border: 2px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;
