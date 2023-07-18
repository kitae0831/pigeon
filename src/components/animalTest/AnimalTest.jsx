import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAnimalTest } from '../../api/animalTest';
import { styled } from 'styled-components';

function AnimalTest() {
  const { isLoading, isError, data } = useQuery('animalTest', getAnimalTest);

  let countA = 0;
  let countB = 0;
  let countC = 0;

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>오류입니다.</div>;
  }

  const handleAnswerA = () => {
    countA++;
    console.log(countA);
  };

  const handleAnswerB = () => {
    countB++;
    console.log(countB);
  };

  const handleAnswerC = () => {
    countC++;
    console.log(countC);
  };

  return (
    <div>
      {data.map((q) => {
        return (
          <div key={q.id}>
            <h3>{q.question}</h3>
            <Answer onClick={handleAnswerA}>{q.answerA}</Answer>
            <Answer>{q.answerB}</Answer>
            <Answer>{q.answerC}</Answer>
          </div>
        );
      })}
    </div>
  );
}

export default AnimalTest;

const Answer = styled.p`
  border: 1px solid;
  width: 300px;
  height: 30px;
  &:hover {
    cursor: pointer;
    box-shadow: rgba(120, 120, 120, 0.2) 0px 2px 8px 0px;
  }
`;
