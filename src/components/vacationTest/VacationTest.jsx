import React from 'react';
import { useState } from 'react';
import { PinkButton } from '../../shared/Buttons';
import { useNavigate } from 'react-router-dom';
import VacationResult from '../../pages/VacationResult';

function VacationTest() {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      text: '다음 중 어떤 환경이 가장 매력적으로 느껴지나요?',
      choices: [
        { id: 1, text: '푸른 바다와 넓은 해변 풍경' },
        { id: 2, text: '청명한 하늘과 산과 자연 풍경' },
        { id: 3, text: '신선한 공기와 시원한 물놀이가 가능한 계곡 풍경' },
        { id: 4, text: '다양한 문화와 시설이 있는 도시 풍경' }
      ]
    },
    {
      id: 2,
      text: '휴가 및 여행을 가실 때 가장 중요하게 고려하는 요소는 무엇인가요?',
      choices: [
        { id: 1, text: '해변을 따라 산책하는 것은 여유를 찾고 휴식' },
        { id: 2, text: '자연 경관의 아름다움' },
        { id: 3, text: '다양한 액티비티와 레저 시설' },
        { id: 4, text: '편리한 숙박 시설과 음식점' }
      ]
    },
    {
      id: 3,
      text: '다음 중 어떤 지형을 가장 선호하시나요',
      choices: [
        { id: 1, text: '바다가 인접한 관광지' },
        { id: 2, text: '산과 자연이 아름다운 지역' },
        { id: 3, text: '계곡과 시원한 물놀이가 가능한 지역' },
        { id: 4, text: '다양한 문화와 시설이 있는 도시' }
      ]
    },
    {
      id: 4,
      text: '휴가를 보내면서 주로 어떤 음식을 즐기고 싶으신가요?',
      choices: [
        { id: 1, text: '해산물 요리' },
        { id: 2, text: '산악 지역의 특산물 요리' },
        { id: 3, text: '계곡의 신선한 채소와 과일' },
        { id: 4, text: '도시의 다양한 레스토랑' }
      ]
    },
    {
      id: 5,
      text: '다음 중 어떤 지형을 가장 선호하시나요',
      choices: [
        { id: 1, text: '바다가 인접한 관광지' },
        { id: 2, text: '산과 자연이 아름다운 지역' },
        { id: 3, text: '계곡과 시원한 물놀이가 가능한 지역' },
        { id: 4, text: '다양한 문화와 시설이 있는 도시' }
      ]
    },
    {
      id: 6,
      text: '휴가 및 여행을 가서 가장 즐기고 싶은 것은 무엇인가요?',
      choices: [
        { id: 1, text: '해변에서의 휴식과 썬베드 즐기기' },
        { id: 2, text: '풍경이 아름다운 산 정상 등반' },
        { id: 3, text: '캠프파이어와 바베큐 파티' },
        { id: 4, text: '쇼핑과 특산품 구매' }
      ]
    },
    {
      id: 7,
      text: '다음 중 머물고 싶은 숙박시설은 어디인가요?',
      choices: [
        { id: 1, text: '비치 리조트' },
        { id: 2, text: '산림펜션' },
        { id: 3, text: '캠핑장' },
        { id: 4, text: '호텔' }
      ]
    },
    {
      id: 8,
      text: '다음 중 본인이 자신이 원하는 이상향은?',
      choices: [
        { id: 1, text: '마음을 비우고 힐링하는 시간' },
        { id: 2, text: '자연 속에서 조용하게 휴식' },
        { id: 3, text: '물에 발을 담그며 보내고 싶은 시간' },
        { id: 4, text: '활기찬 분위기를 즐기는 모던 스타일' }
      ]
    }
  ];

  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleSelect = (questionId, choiceId) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: choiceId
    }));

    // 다음 질문으로 이동
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  if (currentQuestionIndex >= questions.length) {
    // 모든 질문에 대한 선택이 완료되면 여기에 결과를 표시하거나 다른 동작을 수행할 수 있습니다.
    return (
      <>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'
          }}
        >
          <div>설문 조사가 완료되었습니다! 결과를 확인하세요!</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '5vh'
          }}
        >
          <PinkButton onClick={() => navigate('/VacationResult', { state: { selectedAnswers: answers } })}>
            결과 확인!
          </PinkButton>
        </div>
      </>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <div>
        <p>{currentQuestion.text}</p>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {currentQuestion.choices.map((choice) => (
          <label key={choice.id}>
            <input
              type="radio"
              name={`question-${currentQuestion.id}`}
              value={choice.id}
              checked={answers[currentQuestion.id] === choice.id}
              onChange={() => handleSelect(currentQuestion.id, choice.id)}
            />
            {choice.text}
          </label>
        ))}
      </div>
    </div>
  );
}

export default VacationTest;
