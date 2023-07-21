import React from 'react'
import { getImageResult, getImageScore } from '../../api/imageTest';
import { GreenButton } from '../../shared/Buttons';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import '../../color.css';
import { imgMapper } from './ImageMapper';
import { useNavigate } from 'react-router-dom';

function ImageResult() {
  const { isLoading, isError, data } = useQuery('imageScore', getImageScore);
  const { isLoading:isImageLoading, isError:isImageError, data:results } = useQuery('imageResults', getImageResult);
// 이렇게 하기 싫으면 애초에 useQuery 가져올 때 구조분해할당 해주지 말고 가지고 와서 getImageScore.isLoading 이런식으로 써주면 됨
  const navigate = useNavigate();

  if (isLoading || isImageLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (isError || isImageError) {
    return <div>오류입니다.</div>;
  }
  const { score } = data;

  const matchedResult = results?.find((r) =>
    Number(r.minimum)<= score && Number(r.maximum)>=score
  )

  
  
  return (
    <ResultBox>
    <div>
    <h3>남들이 생각하는 당신은?</h3>
    <h2 style={{
      marginBottom: "35px",
      fontWeight:"bold",
      fontSize: "40px",
      textShadow: "1px 1px 2px var(--color_dark_green)",
      textDecoration: "underline var(--color_green) 3px",
    }}>{matchedResult.title}</h2>
    </div>
    <ResultImg src={imgMapper[matchedResult.id]}/>
    <StContent>{matchedResult.content}</StContent>
    <ButtonSet>
    <GreenButton
       onClick={() => {navigate('/')}}
       >홈으로
      </GreenButton>
      <GreenButton
       onClick={() => {navigate('/image-test')}}
       >다시하기
      </GreenButton>
    </ButtonSet>
    </ResultBox>
  )
}

export default ImageResult

const ResultBox = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;
  /* border: 1px solid black; */
  margin: 90px;
`
const ResultImg = styled.img`
  width: 200px;
  margin-bottom: 30px;
`

const StContent = styled.div`
  font-weight: bold;
  line-height: 2;
  margin-bottom: 30px;
`
const ButtonSet = styled.div`
height: 30px;
  display: flex;
  gap: 10px;

`