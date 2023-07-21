import React from 'react';
import { useState } from 'react';
import { PinkButton, PurpleButton } from '../../shared/Buttons';
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
    // 모든 질문에 대한 선택이 완료되면 여기에 결과를 표시하거나 다른 동작을 수행할 수 있습니다.
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'
          }}
        >
          <div>설문 조사가 완료되었습니다! 결과를 확인하세요!</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '5vh'
          }}
        >
          <PinkButton onClick={() => navigate('/VacationResult', { state: { selectedAnswers: answers } })}>
            결과 확인!
          </PinkButton>
        </div>
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column'
            }}
          >
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
          </div>
          <ButtonBox>
            {currentQuestionIndex > 0 && <PurpleButton onClick={handlePreviousQuestion}>이전</PurpleButton>}
            <PurpleButton onClick={handleNextQuestion}>다음</PurpleButton>
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
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  text-align: top;
  margin-bottom: 20px;
  margin-top: -30vh;
`;

const ButtonBox = styled.div`
  margin-top: 30px;
`;

const Label = styled.div`
  margin-bottom: 10px;
`;
