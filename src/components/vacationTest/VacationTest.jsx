import React, { useState } from 'react';
import { PinkButton, GreenButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router-dom';
import { questions } from './VacationTestData';
import styled from 'styled-components';
import BackImg from '../../assets/BackImg.png';

function VacationTest() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelect = (questionId, choiceId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: choiceId
    }));
  };

  const handleNextQuestion = () => {
    if (!answers.hasOwnProperty(questions[currentQuestionIndex].id)) {
      alert('질문을 선택해 주세요!');
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  if (currentQuestionIndex >= questions.length) {
    return (
      <>
        <ResultContainer>
          <div>설문 조사가 완료되었습니다! 결과를 확인하세요!</div>
        </ResultContainer>
        <ResultBtnBox>
          <PinkButton onClick={() => navigate('/vacation-result', { state: { selectedAnswers: answers } })}>
            결과 확인!
          </PinkButton>
        </ResultBtnBox>
      </>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <Backimg>
      <Contaier>
        <div>
          <Header>
            <div>
              <h1>가장 선호하는 휴가 장소는?</h1>
            </div>
          </Header>
          <div>
            <h3>{currentQuestion.text}</h3>
          </div>
          <QuestionBox>
            {currentQuestion.choices.map((choice) => (
              <Label>
                <label key={choice.id}>
                  <input
                    type="radio"
                    name={`question-${currentQuestion.id}`}
                    value={choice.id}
                    checked={answers[currentQuestion.id] === choice.id}
                    onChange={() => handleSelect(currentQuestion.id, choice.id)}
                  />
                  {choice.text}
                </label>
              </Label>
            ))}
          </QuestionBox>
          <ButtonBox>
            {currentQuestionIndex > 0 && <GreenButton onClick={handlePreviousQuestion}>이전</GreenButton>}
            <GreenButton onClick={handleNextQuestion}>다음</GreenButton>
          </ButtonBox>
        </div>
      </Contaier>
    </Backimg>
  );
}

export default VacationTest;

const Backimg = styled.div`
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
`;

const Contaier = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Header = styled.div`
  display: flex;
  text-align: top;
  margin-bottom: 20px;
  margin-top: 30px;
`;

const ButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  height: 100px;
  gap: 10px;
`;

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;

const ResultContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;

const ResultBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
`;
