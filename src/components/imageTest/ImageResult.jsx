import React from 'react';
import { getImageResult, getImageScore } from '../../api/imageTest';
import { GreenButton } from '../../shared/Buttons';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import '../../color.css';
import { imgMapper } from './ImageMapper';
import { useNavigate } from 'react-router-dom';

function ImageResult() {
  const { isLoading, isError, data } = useQuery('imageScore', getImageScore);
  const { isLoading: isImageLoading, isError: isImageError, data: results } = useQuery('imageResults', getImageResult);
  const navigate = useNavigate();

  if (isLoading || isImageLoading) {
    return <div>로딩중입니다.</div>;
  }
  if (isError || isImageError) {
    return <div>오류입니다.</div>;
  }
  const { score } = data;

  const matchedResult = results?.find((r) => Number(r.minimum) <= score && Number(r.maximum) >= score);

  return (
    <ResultBox>
      <div>
        <h3>남들이 생각하는 당신은?</h3>
        <ResultTitle>{matchedResult.title}</ResultTitle>
      </div>
      <ResultImg src={imgMapper[matchedResult.id]} />
      <StContent>{matchedResult.content}</StContent>
      <ButtonSet>
        <GreenButton
          onClick={() => {
            navigate('/');
          }}
        >
          홈으로
        </GreenButton>
        <GreenButton
          onClick={() => {
            navigate('/image-test');
          }}
        >
          다시하기
        </GreenButton>
      </ButtonSet>
    </ResultBox>
  );
}

export default ImageResult;

const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  white-space: pre-line;
  margin: 90px;
`;
const ResultTitle = styled.h2`
  margin-bottom: 35px;
  font-weight: bold;
  font-size: 40px;
  text-shadow: 1px 1px 2px var(--color_dark_green);
  text-decoration: underline var(--color_green) 3px;
`;
const ResultImg = styled.img`
  width: 200px;
  margin-bottom: 30px;
`;

const StContent = styled.div`
  font-weight: bold;
  line-height: 2;
  margin-bottom: 30px;
`;
const ButtonSet = styled.div`
  height: 30px;
  display: flex;
  gap: 10px;
`;
