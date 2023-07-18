import React, { useState } from 'react';
import Modal from './testModal';

const MbtiTest = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  0;
  const handleOptionClick = (optionId) => {
    const selectedOption = questions[currentQuestionIndex].choices.find((choice) => choice.id === optionId);
    setSelectedOptions([...selectedOptions, selectedOption]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateResult = () => {
    const resultCounts = [0, 0, 0, 0]; // MBTI 유형별 결과 카운트
    selectedOptions.forEach((option) => {
      if (option.id === 1) {
        resultCounts[0]++;
      } else if (option.id === 2) {
        resultCounts[1]++;
      } else if (option.id === 3) {
        resultCounts[2]++;
      } else if (option.id === 4) {
        resultCounts[3]++;
      }
    });

    // 각 MBTI 유형에 대한 결과값을 계산
    let result = '';
    if (resultCounts[0] > resultCounts[1]) {
      result += 'E';
    } else {
      result += 'I';
    }
    if (resultCounts[2] > resultCounts[3]) {
      result += 'S';
    } else {
      result += 'N';
    }
    if (resultCounts[0] > resultCounts[1]) {
      result += 'T';
    } else {
      result += 'F';
    }
    if (resultCounts[2] > resultCounts[3]) {
      result += 'J';
    } else {
      result += 'P';
    }

    return result;
  };

  const showTestResult = () => {
    setShowResult(true);
  };

  const closeModal = () => {
    setSelectedOptions([]);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  return (
    <div>
      <h1>MBTI 테스트</h1>
      {currentQuestionIndex < questions.length && (
        <div>
          <h3>{questions[currentQuestionIndex].text}</h3>
          <ul>
            {questions[currentQuestionIndex].choices.map((choice) => (
              <li key={choice.id}>
                <button onClick={() => handleOptionClick(choice.id)}>{choice.text}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentQuestionIndex === questions.length && (
        <div>
          <h2>나의 MBTI 유형</h2>
          <p>{calculateResult()}</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      )}

      {!showResult && currentQuestionIndex < questions.length && <button onClick={showTestResult}>결과 확인</button>}

      {showResult && (
        <Modal closeModal={closeModal}>
          <h2>나의 MBTI 유형</h2>
          <p>{calculateResult()}</p>
          <button onClick={closeModal}>닫기</button>
        </Modal>
      )}
    </div>
  );
};

export default MbtiTest;
