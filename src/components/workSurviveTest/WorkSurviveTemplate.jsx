import React, { useState } from 'react';
import { WorkSurviveTest, WorkSurviveResult } from './WorkSurviveData';
import { styled } from 'styled-components';

function WorkSurviveTemplate() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({});
  const [result, setResult] = useState(false);
  const [checkedValue, setCheckedValue] = useState(null);

  const handleAnswer = (value) => {
    setCheckedValue(value);
    setScore((prevScore) => {
      const newScore = { ...prevScore, [step]: value };
      return newScore;
    });
  };

  const newScore = Object.values(score);
  const totalScore = newScore.reduce((prev, cur) => {
    return (prev += cur);
  }, 0);

  console.log('total', totalScore);

  const handleNextBtn = () => {
    if (step < 9) {
      setStep(step + 1);
      setCheckedValue(null);
    } else {
      setResult(true);
    }
  };

  const makeResult = () => {
    const surveyResult = WorkSurviveResult.find((item) => item.score[0] <= totalScore);
    console.log('survey', surveyResult);

    return (
      <Container>
        <ResultContainer>
          <h1>{surveyResult.title}</h1>
          <ResultDescription>{surveyResult.description}</ResultDescription>
        </ResultContainer>
      </Container>
    );
  };

  return result ? (
    makeResult()
  ) : (
    <div>
      <h1>출근길에서 살아남기 테스트</h1>
      <div>
        <h3>{WorkSurviveTest[step].question}</h3>
        {WorkSurviveTest[step].answers.map((item) => {
          return (
            <div key={item.score}>
              <form>
                <label>
                  <input
                    name={`answer_${WorkSurviveTest[step].id}`}
                    type="radio"
                    value={item.score}
                    checked={checkedValue === item.score}
                    onChange={() => handleAnswer(item.score)}
                  />
                  {item.answer}
                </label>
              </form>
              {console.log(score)}
            </div>
          );
        })}
        <button onClick={() => setStep(step - 1)}>이전</button>
        <button onClick={handleNextBtn}>다음</button>
      </div>
    </div>
  );
}

export default WorkSurviveTemplate;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center;
  height: 50vh; */
`;

const ResultContainer = styled.div`
  margin: 0 auto;
  text-align: center;

  /* position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const ResultDescription = styled.p`
  width: 500px;
`;
