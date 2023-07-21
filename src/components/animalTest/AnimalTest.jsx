import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAnimalTest } from '../../api/animalTest';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';

function AnimalTest() {
  const { isLoading, isError, data } = useQuery('animalTest', getAnimalTest);
  const [state, setState] = useState([]);
  const navigate = useNavigate();

  const resultHandelr = () => {
    const answerA = state.filter((i) => i.selectedAnswer === 'A').length;
    const answerB = state.filter((i) => i.selectedAnswer === 'B').length;
    const answerC = state.filter((i) => i.selectedAnswer === 'C').length;

    if (answerA + answerB + answerC === 10) {
      if (answerA >= answerB && answerA >= answerC) {
        navigate('/search/bird');
      } else if (answerB >= answerC && answerB > answerA) {
        navigate('/search/dog');
      } else if (answerC > answerA && answerC > answerB) {
        navigate('/search/cat');
      }
    } else {
      alert('모든 항목에 답변해주세요');
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
          <MainBox key={q.id}>
            <QuestionBox>
              {q.id}. {q.question}
            </QuestionBox>
            <AnswerBox>
              <AnswerBoxA>
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
              </AnswerBoxA>

              <AnswerBoxB>
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
              </AnswerBoxB>

              <AnswerBoxC>
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
              </AnswerBoxC>
            </AnswerBox>
          </MainBox>
        );
      })}
      <PurpleButton type="button" onClick={resultHandelr}>
        Click
      </PurpleButton>
    </div>
  );
}

export default AnimalTest;

const MainBox = styled.div`
  box-shadow: 10px 2px 10px 0px #8785a2;

  padding: 10px;
  margin: 20px;
`;

const QuestionBox = styled.h2`
  display: flex;
  justify-content: center;
`;

const AnswerBox = styled.div`
  display: flex;
  justify-content: center;
`;

const AnswerBoxA = styled.label`
  margin-right: 30px;
  display: inline-block;
`;

const AnswerBoxB = styled.label`
  margin-right: 30px;
  margin-bottom: 15px;
  display: inline-block;
`;

const AnswerBoxC = styled.label`
  display: inline-block;
`;

const PurpleButton = styled.button`
  display: flex;
  margin-right: auto;

  box-sizing: border-box;

  margin: 5px;
  padding: 10px 15px;
  background-color: var(--color_purple);
  color: var(--color_gray);
  border: none;
  border-radius: 12px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color_gray);
    color: var(--color_purple);
    transition: all 0.3s;
  }
`;
