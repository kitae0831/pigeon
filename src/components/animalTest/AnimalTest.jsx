import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAnimalTest } from '../../api/animalTest';
import { styled } from 'styled-components';

function AnimalTest() {
  const { isLoading, isError, data } = useQuery('animalTest', getAnimalTest);
  const [state, setState] = useState([{}]);

  if (isLoading) {
    return <div>로딩중입니다.</div>;
  }

  if (isError) {
    return <div>오류입니다.</div>;
  }

  /**
    @example
    {
      problem: 1,
      selectedAnswer: "A"
    }
  */

  return (
    <div>
      {/* 사용하지 않아야할 때 = todolist 마냥 여러 리스트가 삭제되고 항목들이 변돌 될 때는 index를 사용하면 안된다.. 사용해도 될 때 = 수정 삭제 없이 고정되어 있는 애들일 때는 사용해도 된다*/}
      {data.map((q, index) => {
        return (
          <div key={q.id}>
            <h3>{q.question}</h3>

            <input
              type="radio"
              name={`question${index}`}
              id="A"
              value="A"
              onChange={(e) => {
                // 선택한 문항이 이미 있는지 확인
                const checkProlbemIsAlreadyExistIndex = state.findIndex((item) => item.problem === index + 1);

                if (checkProlbemIsAlreadyExistIndex > -1) {
                  // 객체의 얕은 복사
                  const tempItem = {
                    ...state[checkProlbemIsAlreadyExistIndex]
                  };

                  tempItem.selectedAnswer = e.target.value;

                  setState((prev) => {
                    // 얕은 복사
                    const current = [...prev];
                    current[checkProlbemIsAlreadyExistIndex] = tempItem;

                    return current;
                  });
                }

                if (checkProlbemIsAlreadyExistIndex === -1) {
                  setState((prev) => [
                    ...prev,
                    {
                      problem: index + 1,
                      selectedAnswer: e.target.value
                    }
                  ]);
                }
              }}
            />
            <label htmlFor="A">{q.answerA}</label>

            <input
              type="radio"
              name={`question${index}`}
              id="B"
              value="B"
              onChange={(e) => {
                // 선택한 문항이 이미 있는지 확인
                const checkProlbemIsAlreadyExistIndex = state.findIndex((item) => item.problem === index + 1);

                if (checkProlbemIsAlreadyExistIndex > -1) {
                  // 객체의 얕은 복사
                  const tempItem = {
                    ...state[checkProlbemIsAlreadyExistIndex]
                  };

                  tempItem.selectedAnswer = e.target.value;

                  setState((prev) => {
                    // 얕은 복사
                    const current = [...prev];
                    current[checkProlbemIsAlreadyExistIndex] = tempItem;

                    return current;
                  });
                }

                if (checkProlbemIsAlreadyExistIndex === -1) {
                  setState((prev) => [
                    ...prev,
                    {
                      problem: index + 1,
                      selectedAnswer: e.target.value
                    }
                  ]);
                }
              }}
            />
            <label htmlFor="B">{q.answerB}</label>

            <input
              type="radio"
              name={`question${index}`}
              id="C"
              value="C"
              onChange={(e) => {
                // 선택한 문항이 이미 있는지 확인
                const checkProlbemIsAlreadyExistIndex = state.findIndex((item) => item.problem === index + 1);

                if (checkProlbemIsAlreadyExistIndex > -1) {
                  // 객체의 얕은 복사
                  const tempItem = {
                    ...state[checkProlbemIsAlreadyExistIndex]
                  };

                  tempItem.selectedAnswer = e.target.value;

                  setState((prev) => {
                    // 얕은 복사
                    const current = [...prev];
                    current[checkProlbemIsAlreadyExistIndex] = tempItem;

                    return current;
                  });
                }

                if (checkProlbemIsAlreadyExistIndex === -1) {
                  setState((prev) => [
                    ...prev,
                    {
                      problem: index + 1,
                      selectedAnswer: e.target.value
                    }
                  ]);
                }
              }}
            />
            <label htmlFor="C">{q.answerC}</label>

            {/* <Answer onClick={handleAnswerA}>{q.answerA}</Answer>
             <Answer onClick={handleAnswerB}>{q.answerB}</Answer>
             <Answer onClick={handleAnswerC}>{q.answerC}</Answer> */}
          </div>
        );
      })}

      <button type="button" onClick={() => console.log(state)}>
        Click
      </button>
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

const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
