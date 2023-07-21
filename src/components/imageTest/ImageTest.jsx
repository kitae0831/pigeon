import React from 'react';
import { useQuery } from 'react-query';
import { getImageTest, fixScore } from '../../api/imageTest';
import { useState } from 'react';
import $ from 'jquery';
import { PurpleButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router-dom';

function ImageTest() {
  const { isLoading, isError, data } = useQuery('imageTest', getImageTest);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const nextButtonClickHandler = async () => {
    const checkedInputScore = $(`input[name=${questionNumber}]:checked`).val();
    // 라디오 버튼 체크된 값(checked value)
    // $('input[name="checkbox"]').is(':checked'); // 체크박스 체크 여부(checked)
    if (checkedInputScore === undefined) {
      return alert('답변을 선택해주세요!');
    }
    // await setTotalScore(totalScore + Number(checkedInputScore))
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
    <>
      <h3>{data[questionNumber].question}</h3>
      <div>
        {data[questionNumber].answers.map((a) => {
          return (
            <div key={a.id}>
              <input type="radio" id={a.id} value={a.score} name={questionNumber} />
              <label>{a.answer}</label>
            </div>
          );
        })}
      </div>
      <PurpleButton onClick={nextButtonClickHandler}>{questionNumber === 9 ? '결과 보기' : '다음'}</PurpleButton>
    </>
  );
}

export default ImageTest;
