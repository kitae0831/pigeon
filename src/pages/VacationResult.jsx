import React from 'react';
import { useLocation } from 'react-router-dom';

function VacationResult() {
  const location = useLocation();
  const selectedAnswers = location.state?.selectedAnswers || {};

  const resultHandler = () => {
    const answerA = Object.values(selectedAnswers).filter((choice) => choice === 1).length;
    const answerB = Object.values(selectedAnswers).filter((choice) => choice === 2).length;
    const answerC = Object.values(selectedAnswers).filter((choice) => choice === 3).length;
    const answerD = Object.values(selectedAnswers).filter((choice) => choice === 4).length;

    console.log('selectedAnswers:', selectedAnswers);
    console.log('answerA:', answerA);
    console.log('answerB:', answerB);
    console.log('answerC:', answerC);
    console.log('answerD:', answerD);

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

  return (
    <>
      <div>
        <h2>당신에게 맞는 휴가지는 {resultHandler()}입니다!</h2>
      </div>
    </>
  );
}

export default VacationResult;
