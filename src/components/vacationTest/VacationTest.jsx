import React from 'react';
import { useState } from 'react';
import { PinkButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router-dom';
import { questions } from './VacationTestData';

function VacationTest() {
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelect = (questionId, choiceId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: choiceId
    }));

    // 다음 질문으로 이동
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
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
    <div>
      <div>
        <p>{currentQuestion.text}</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {currentQuestion.choices.map((choice) => (
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
        ))}
      </div>
    </div>
  );
}

export default VacationTest;
