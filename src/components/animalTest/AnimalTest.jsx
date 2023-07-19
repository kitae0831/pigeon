import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAnimalTest } from '../../api/animalTest';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function AnimalTest() {
  const { isLoading, isError, data } = useQuery('animalTest', getAnimalTest);
  const [state, setState] = useState([{}]);
  const navigate = useNavigate();

  const resultHandelr = () => {
    const answerA = state.filter((i) => i.selectedAnswer === 'A').length;
    const answerB = state.filter((i) => i.selectedAnswer === 'B').length;
    const answerC = state.filter((i) => i.selectedAnswer === 'C').length;

    if (answerA >= answerB && answerA >= answerC) {
      navigate('/search?type=bird');
    } else if (answerB >= answerC && answerB > answerA) {
      navigate('/search?type=dog');
    } else if (answerC > answerA && answerC > answerB) {
      navigate('/search?type=cat');
    }
  };

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
      {data.map((q, index) => {
        return (
          <div key={q.id}>
            <h3>{q.question}</h3>

            <label>
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
              {q.answerA}
            </label>

            <label>
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
              {q.answerB}
            </label>

            <label>
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
              {q.answerC}
            </label>
          </div>
        );
      })}

      <button type="button" onClick={resultHandelr}>
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
