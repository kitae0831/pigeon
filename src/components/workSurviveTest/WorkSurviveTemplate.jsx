import React, { useState } from 'react';
import { WorkSurviveTest, WorkSurviveResult } from './WorkSurviveData';
import { styled } from 'styled-components';
import Modal from '../../shared/Modal';
import { GreenButton } from '../../shared/Buttons';
import workResult from '../../assets/workResult.png';

function WorkSurviveTemplate() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState({});
  const [result, setResult] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
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

  const handleOkBtn = () => {
    setIsOpen(false);
  };

  const handleCancelBtn = () => {
    setIsOpen(false);
  };

  const handleNextBtn = () => {
    if (step < 9 && Object.keys(score).length == WorkSurviveTest[step].id) {
      setStep(step + 1);
      setCheckedValue(null);
    } else if (step < 9 && Object.keys(score).length < WorkSurviveTest[step].id) {
      setIsOpen(true);
    } else {
      setResult(true);
    }
  };

  if (isOpen) {
    return (
      <Modal handleOkBtn={handleOkBtn} handleCancelBtn={handleCancelBtn}>
        문항을 선택하세요.
      </Modal>
    );
  }

  const makeResult = () => {
    const surveyResult = WorkSurviveResult.find((item) => item.score[0] <= totalScore);

    return (
      <ResultContainer>
        <ResultBox>
          <h1>{surveyResult?.title}</h1>
          <ResultImg src={workResult} />
          <ResultDescription>{surveyResult?.description}</ResultDescription>
        </ResultBox>
      </ResultContainer>
    );
  };

  return result ? (
    makeResult()
  ) : (
    <QuestionContainer>
      <QuestionBox>
        <Title>출근길에서 살아남기</Title>
        <div>
          <h3>{WorkSurviveTest[step].question}</h3>
          {WorkSurviveTest[step].answers.map((item) => {
            return (
              <div key={item.score}>
                <form>
                  <AnswerLabel>
                    <input
                      name={`answer_${WorkSurviveTest[step].id}`}
                      type="radio"
                      value={item.score}
                      checked={checkedValue === item.score}
                      onChange={() => handleAnswer(item.score)}
                    />
                    {item.answer}
                  </AnswerLabel>
                </form>
              </div>
            );
          })}
          <ButtonBox>
            {step == 0 ? null : <GreenButton onClick={() => setStep(step - 1)}>이전</GreenButton>}
            <GreenButton name="nextBtn" onClick={handleNextBtn}>
              {step == 9 ? '결과보기' : '다음'}
            </GreenButton>
          </ButtonBox>
        </div>
      </QuestionBox>
    </QuestionContainer>
  );
}

export default WorkSurviveTemplate;

const QuestionContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 900px;
  height: 600px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(252, 247, 247, 0.5)),
    url('https://cdn.pixabay.com/photo/2015/10/31/12/07/business-card-1015419_1280.jpg');
  background-position: center;
  background-size: cover;
`;

const QuestionBox = styled.div`
  margin-top: 20px;
`;

const Title = styled.p`
  font-size: 33px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  /* 그림자 스타일 추가 */
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const AnswerLabel = styled.label`
  display: block;
  margin-bottom: 10px;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const ResultContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  width: 900px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ResultBox = styled.div`
  margin: 0 auto;
  text-align: center;

  /* position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

const ResultImg = styled.img`
  width: 450px;
`;

const ResultDescription = styled.p`
  width: 1000px;
  line-height: 1.5;
  white-space: pre-line;
`;

const ButtonBox = styled.div`
  margin-top: 90px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
