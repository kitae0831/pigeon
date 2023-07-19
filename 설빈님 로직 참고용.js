import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAnimalTest } from '../../api/animalTest';
import { styled } from 'styled-components';

function AnimalTest() {
  const { isLoading, isError, data } = useQuery('animalTest', getAnimalTest);
  const [selectedAnswer, setSelectedAnswer] = useState([]);

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (isError) {
    return <div>오류입니다.</div>;
  }

  const handleRadioChange = (questionId, value) => {
    setSelectedAnswer((prevValues) => {
      const newValues = [...prevValues];
      newValues[questionId] = value;
      return newValues;
    });
  };
  console.log(selectedAnswer);

  return (
    <div>
      {data.map((q) => {
        return (
          <QuestionBox key={q.id}>
            <h3>{q.question}</h3>
            <AnswerForm>
              <label htmlFor={`question-${q.id}`}>
                <input
                  name={`question-${q.id}`}
                  type="radio"
                  value="answerA"
                  checked={selectedAnswer[q.id] === 'answerA'}
                  onChange={() => handleRadioChange(q.id, 'answerA')}
                />
                {q.answerA}
              </label>
              <label htmlFor={`question-${q.id}`}>
                <input
                  name={`question-${q.id}`}
                  type="radio"
                  value="answerB"
                  checked={selectedAnswer[q.id] === 'answerB'}
                  onChange={() => handleRadioChange(q.id, 'answerB')}
                />
                {q.answerB}
              </label>
              <label htmlFor={`question-${q.id}`}>
                <input
                  name={`question-${q.id}`}
                  type="radio"
                  value="answerC"
                  checked={selectedAnswer[q.id] === 'answerC'}
                  onChange={() => handleRadioChange(q.id, 'answerC')}
                />
                {q.answerC}
              </label>
              <p>선택된 값: {selectedAnswer[q.id]}</p>
            </AnswerForm>
          </QuestionBox>
        );
      })}
      <button>결과보기</button>
    </div>
  );
}
export default AnimalTest;
const QuestionBox = styled.div``;
const AnswerForm = styled.form`
  display: flex;
  flex-direction: column;
`;
