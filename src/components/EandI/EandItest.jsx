import React, { useState } from 'react';
import { EandIQ } from './EandIQ';
import Modal from './TestModal'; // 모달 컴포넌트를 가져옴

const EandItset = () => {
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달창 열림/닫힘 상태

  const handleOptionClick = (optionId) => {
    setSelectedOptionId(optionId);
    setIsModalOpen(false); // 선택지 클릭하면 모달창 닫음
  };

  const handleNextClick = () => {
    if (selectedOptionId === null) {
      setIsModalOpen(true); // 선택지를 선택하지 않으면 모달창 열림
    } else if (currentQuestionIndex < EandIQ.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setSelectedOptionId(null);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
      setSelectedOptionId(null);
    }
  };

  const calculateResult = () => {
    const selectedOption = EandIQ[currentQuestionIndex].choices.find((choice) => choice.id === selectedOptionId);
    return selectedOption.text;
  };

  const closeModal = () => {
    setSelectedOptionId(null);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setIsModalOpen(false); // 모달창 닫기
  };

  return (
    <div>
      <h1>나는 내향적인가 외향적인가?</h1>
      {currentQuestionIndex < EandIQ.length && (
        <div>
          <h3>{EandIQ[currentQuestionIndex].text}</h3>
          <ul>
            {EandIQ[currentQuestionIndex].choices.map((choice) => (
              <li key={choice.id}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOptionId === choice.id}
                    onChange={() => handleOptionClick(choice.id)}
                  />
                  {choice.text}
                </label>
              </li>
            ))}
          </ul>
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            {currentQuestionIndex > 0 && (
              <button style={{ marginRight: '10px' }} onClick={handlePrevClick}>
                이전
              </button>
            )}
            <button onClick={handleNextClick}>다음</button>
          </div>
        </div>
      )}

      {showResult && (
        <div>
          <h2>나의 성향</h2>
          <p>{calculateResult()}</p>
          <button onClick={closeModal}>닫기</button>
        </div>
      )}

      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>선택지를 하나 이상 선택해주세요.</Modal>}
    </div>
  );
};

export default EandItset;
