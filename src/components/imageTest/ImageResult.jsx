import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getImageTest, fixScore } from '../../api/imageTest';
import $ from 'jquery';
import { GreenButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import '../../color.css';

function ImageTest() {
  const { isLoading, isError, data } = useQuery('imageTest', getImageTest);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const nextButtonClickHandler = async () => {
    const checkedInputScore = $(`input[name=${questionNumber}]:checked`).val();
    if (checkedInputScore === undefined) {
      return alert('답변을 선택해주세요!');
    }
    if (questionNumber === 9) {
      fixScore(totalScore + Number(checkedInputScore));
      navigate('/image-result');
    } else {
      setQuestionNumber(questionNumber + 1);
      setTotalScore(totalScore + Number(checkedInputScore));
    }

    $(`input[name=${questionNumber}]`).prop('checked', false);
  };

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (isError) {
    return <div>오류입니다.</div>;
  }

  return (
    <StContainer>
      <ImgTestTitle>이미지 테스트 😎</ImgTestTitle>
      <QuestionBox>
        <Question>
          {questionNumber + 1}.&nbsp;{data[questionNumber].question}
        </Question>
        <AnswerBox>
          {data[questionNumber].answers.map((a) => {
            return (
              <div key={a.id}>
                <Input type="radio" id={a.id} value={a.score} name={questionNumber} />
                <Label htmlFor={a.id}>{a.answer}</Label>
              </div>
            );
          })}
        </AnswerBox>
        <GreenButton onClick={nextButtonClickHandler} style={{ width: '200px' }}>
          {questionNumber === 9 ? '결과 확인하기 !' : '다음'}
        </GreenButton>
      </QuestionBox>
    </StContainer>
  );
}

export default ImageTest;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImgTestTitle = styled.h1`
  color: var(--color_dark_green);
  font-size: 40px;
`;

const QuestionBox = styled.div`
  display: flex;
  height: 550px;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  border: 7px solid var(--color_green);
  border-radius: 20px;
  width: 940px;
`;

const Question = styled.h2`
  font-size: 30px;
`;

const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 500px;
  height: 300px;
  padding-left: 50px;
  box-sizing: border-box;
`;

const Input = styled.input`
  cursor: pointer;
`;

const Label = styled.label`
  font-weight: bold;
  cursor: pointer;
`;