import React, { useState } from 'react';
import Modal from './TestModal.jax'

const MbtiTest = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      id: 1,
      text: '나는 사람들과 함께 있을 때...',
      choices: [
        { id: 1, text: '에너지를 얻는다.' },
        { id: 2, text: '에너지를 소비한다.' }
      ]
    },
    {
      id: 2,
      text: '나는 새로운 상황에 대해...',
      choices: [
        { id: 1, text: '열린 마음으로 받아들인다.' },
        { id: 2, text: '경계심을 가진다.' }
      ]
    },
    {
      id: 3,
      text: '나는 결정을 내릴 때...',
      choices: [
        { id: 1, text: '감정에 의존한다.' },
        { id: 2, text: '논리에 의존한다.' }
      ]
    },
    {
      id: 4,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '세부사항에 신경쓴다.' },
        { id: 2, text: '큰 그림을 본다.' }
      ]
    },
    {
      id: 5,
      text: '나는 정보를 받아들일 때...',
      choices: [
        { id: 1, text: '사실적인 정보에 관심이 있다.' },
        { id: 2, text: '상상력과 가능성에 관심이 있다.' }
      ]
    },
    {
      id: 6,
      text: '나는 결정을 내릴 때...',
      choices: [
        { id: 1, text: '타인의 의견을 중요시한다.' },
        { id: 2, text: '자신의 의견을 중요시한다.' }
      ]
    },
    {
      id: 7,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '계획을 세우는 것을 좋아한다.' },
        { id: 2, text: '유연하게 대처하는 것을 좋아한다.' }
      ]
    },
    {
      id: 8,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '빠른 속도로 일한다.' },
        { id: 2, text: '느린 속도로 일한다.' }
      ]
    },
    {
      id: 9,
      text: '나는 문제를 해결할 때...',
      choices: [
        { id: 1, text: '사실과 경험에 의존한다.' },
        { id: 2, text: '직관과 상상력에 의존한다.' }
      ]
    },
    {
      id: 10,
      text: '나는 사람들과 대화할 때...',
      choices: [
        { id: 1, text: '자주 말을 한다.' },
        { id: 2, text: '적게 말을 한다.' }
      ]
    },
    {
      id: 11,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '사실에 기반한 판단을 한다.' },
        { id: 2, text: '감정과 관계에 기반한 판단을 한다.' }
      ]
    },
    {
      id: 12,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '계획에 따라 진행한다.' },
        { id: 2, text: '즉흥적으로 진행한다.' }
      ]
    },
    {
      id: 13,
      text: '나는 어떤 환경에서 가장 효율적으로 일할 수 있는가?',
      choices: [
        { id: 1, text: '사람들과 함께하는 활발한 환경이 좋다.' },
        { id: 2, text: '조용하고 개인적인 공간에서 일하는 것이 좋다.' }
      ]
    },
    {
      id: 14,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '계획을 따라 일한다.' },
        { id: 2, text: '자유롭게 일한다.' }
      ]
    },
    {
      id: 15,
      text: '나는 논쟁할 때...',
      choices: [
        { id: 1, text: '논리와 분석을 중요시한다.' },
        { id: 2, text: '감정과 관계를 중요시한다.' }
      ]
    },
    {
      id: 16,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '현재의 상황에 집중한다.' },
        { id: 2, text: '미래의 가능성에 집중한다.' }
      ]
    },
    {
      id: 17,
      text: '나는 결정을 내릴 때...',
      choices: [
        { id: 1, text: '사실에 의존한다.' },
        { id: 2, text: '감정에 의존한다.' }
      ]
    },
    {
      id: 18,
      text: '나는 주로...',
      choices: [
        { id: 1, text: '계획적으로 일한다.' },
        { id: 2, text: '변화를 추구하는 것을 좋아한다.' }
      ]
    },
    {
      id: 19,
      text: '나는 타인과 대화할 때...',
      choices: [
        { id: 1, text: '이야기의 내용에 집중한다.' },
        { id: 2, text: '이야기의 분위기와 감정에 집중한다.' }
      ]
    },
    {
      id: 20,
      text: '나는 결정을 내릴 때...',
      choices: [
        { id: 1, text: '직관에 의존한다.' },
        { id: 2, text: '논리에 의존한다.' }
      ]
    }
  ];

  const handleOptionClick = (optionId) => {
    const selectedOption = questions[currentQuestionIndex].choices.find((choice) => choice.id === optionId);
    setSelectedOptions([...selectedOptions, selectedOption]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const calculateResult = () => {
    const resultCounts = [0, 0, 0, 0]; // MBTI 유형별 결과 카운트
    selectedOptions.forEach((option) => {
      if (option.id === 1) {
        resultCounts[0]++;
      } else if (option.id === 2) {
        resultCounts[1]++;
      } else if (option.id === 3) {
        resultCounts[2]++;
      } else if (option.id === 4) {
        resultCounts[3]++;
      }
    });

    // 각 MBTI 유형에 대한 결과값을 계산
    let result = '';
    if (resultCounts[0] > resultCounts[1]) {
      result += 'E';
    } else {
      result += 'I';
    }
    if (resultCounts[2] > resultCounts[3]) {
      result += 'S';
    } else {
      result += 'N';
    }
    if (resultCounts[0] > resultCounts[1]) {
      result += 'T';
    } else {
      result += 'F';
    }
    if (resultCounts[2] > resultCounts[3]) {
      result += 'J';
    } else {
      result += 'P';
    }

    return result;
  };

  const showTestResult = () => {
    setShowResult(true);
  };

  const closeModal = () => {
    setSelectedOptions([]);
    setCurrentQuestionIndex(0);
    setShowResult(false);
  };

  return (
    <div>
      <h1>MBTI 테스트</h1>
      {currentQuestionIndex < questions.length && (
        <div>
          <h3>{questions[currentQuestionIndex].text}</h3>
          <ul>
            {questions[currentQuestionIndex].choices.map((choice) => (
              <li key={choice.id}>
                <button onClick={() => handleOptionClick(choice.id)}>{choice.text}</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {currentQuestionIndex === questions.length && (
        <div>
          <h2>나의 MBTI 유형</h2>
          <p>{calculateResult()}</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      )}

      {!showResult && currentQuestionIndex < questions.length && <button onClick={showTestResult}>결과 확인</button>}

      {showResult && (
        <Modal closeModal={closeModal}>
          <h2>나의 MBTI 유형</h2>
          <p>{calculateResult()}</p>
          <button onClick={closeModal}>닫기</button>
        </Modal>
      )}
    </div>
  );
};

export default MbtiTest;
