import React from 'react'
import { useQuery } from 'react-query'
import { getImageTest, fixScore } from '../../api/imageTest';
import { useState } from 'react';
import $ from 'jquery';
import { PurpleButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import '../../color.css'

function ImageTest() {
  const { isLoading, isError, data} = useQuery('imageTest', getImageTest);
  const [questionNumber, setQuestionNumber] = useState(0)
  const [totalScore, setTotalScore] = useState(0)
  const navigate = useNavigate();


  const nextButtonClickHandler = async() => {
    const checkedInputScore = ($(`input[name=${questionNumber}]:checked`).val())
    // 라디오 버튼 체크된 값(checked value)
    // $('input[name="checkbox"]').is(':checked'); // 체크박스 체크 여부(checked)
    if(checkedInputScore === undefined) {return alert("답변을 선택해주세요!")}
      // await setTotalScore(totalScore + Number(checkedInputScore))
    if(questionNumber === 9){
      fixScore(totalScore + Number(checkedInputScore));
      navigate('/image-result')
    } else {
      setQuestionNumber(questionNumber + 1)
      setTotalScore(totalScore + Number(checkedInputScore))
    }
 
    $(`input[name=${questionNumber}]`).prop("checked", false); 
  }

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (isError) {
    return <div>오류입니다.</div>;
    
  }

  return (
  <StContainer>
    <h1 style={{color: "var(--color_purple"}}>이미지 테스트 😎</h1>
    <QuestionBox>
      <h2>{questionNumber+1}.&nbsp;{data[questionNumber].question}</h2>
      <AnswerBox>
        {data[questionNumber].answers.map((a) => {
          return (
          <div
          key={a.id}
          >
          <input
            type="radio"
            id={a.id}
            value={a.score}
            name={questionNumber}
            style={{cursor: "pointer"}}
          />
          <label htmlFor={a.id} style={{fontWeight: "bold", cursor: "pointer"}}>{a.answer}</label>
           </div>
          )
        })}
        </AnswerBox>
       <PurpleButton
       onClick={nextButtonClickHandler}
       style={{width: "140px", height: "50px", borderRadius: "20px",}}
       >{questionNumber===9? "결과 확인하기 !": "다음"}
      </PurpleButton>
      </QuestionBox>
    </StContainer>
  )
}

export default ImageTest

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const QuestionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  background-color:var(--color_purple);
  background-color: rgba( 255, 255, 255, 0.5 );
  border: 7px solid var(--color_purple);
  border-radius: 20px;
  width: 850px;
`
const AnswerBox = styled.div`
  display:flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  width: 400px;
  height: 220px;
  padding-left: 30px;
  box-sizing: border-box;
`