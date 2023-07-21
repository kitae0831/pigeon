import React, { useState } from 'react';
import { EandIQ } from './EandIQ';
import Modal from './TestModal';
import EandIA_E from './EandIA_E'; // 외향적 결과 컴포넌트
import EandIA_I from './EandIA_I'; // 내향적 결과 컴포넌트';
import styled from 'styled-components';
import { GreenButton } from '../../shared/Buttons';
import nightSky from '../../assets/night_sky.png'; // 별이 떠있는 밤하늘 이미지

const EandItset = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOptionClick = (optionId) => {
    setSelectedOptionId(optionId);
    setIsModalOpen(false);
  };

  const handleNextClick = () => {
    if (selectedOptionId === null) {
      setIsModalOpen(true);
    } else if (currentQuestionIndex < EandIQ.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOptionId(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOptionId(null);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleNextClick();
    }
  };

  const calculateResult = () => {
    let sum = 0;
    for (const question of EandIQ) {
      const selectedChoice = question.choices.find((choice) => choice.id === selectedOptionId);
      if (selectedChoice) {
        if (selectedChoice.id === 1) {
          sum += 1;
        } else if (selectedChoice.id === 2) {
          sum -= 1;
        }
      }
    }
    return sum;
  };

  const closeModal = () => {
    setSelectedOptionId(null);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setIsModalOpen(false);
  };

  const showResultModal = () => {
    const result = calculateResult();
    if (result >= 1) {
      return <EandIA_E onClose={closeModal} />;
    } else {
      return <EandIA_I onClose={closeModal} />;
    }
  };

  return (
    <Container>
      <h1>나는 내향적인가 외향적인가?</h1>
      {currentQuestionIndex < EandIQ.length && !showResult && (
        <QuestionContainer>
          <h3>{EandIQ[currentQuestionIndex].text}</h3>
          <Choices>
            {EandIQ[currentQuestionIndex].choices.map((choice) => (
              <Choice key={choice.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptionId === choice.id}
                    onChange={() => handleOptionClick(choice.id)}
                    onKeyDown={handleKeyDown}
                  />
                  {choice.text}
                </label>
              </Choice>
            ))}
          </Choices>
          <ButtonsContainer>
            {currentQuestionIndex > 0 && <GreenButton onClick={handlePrevClick}>이전</GreenButton>}
            <GreenButton onClick={handleNextClick}>다음</GreenButton>
          </ButtonsContainer>
        </QuestionContainer>
      )}

      {showResult && <ResultContainer>{showResultModal()}</ResultContainer>}

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>선택지를 하나 이상 선택해주세요.</Modal>}
    </Container>
  );
};

export default EandItset;

const Container = styled.div`
  margin-top: 150px;
  margin-bottom: 150px;
  background-color: #121721; /* 밤하늘 색상 */
  height: 400px;
  color: #fff;
  padding: 20px;
`;

const QuestionContainer = styled.div`
  background-image: url(${nightSky});
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const Choices = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Choice = styled.li`
  margin-bottom: 10px;
`;

const ButtonsContainer = styled.div`
height: 50px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 40px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
