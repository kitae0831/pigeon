import React from 'react';
import { useNavigate } from 'react-router-dom';
import ETypeImage from '../../assets/E형.png';
import { styled } from 'styled-components';
import { PurpleButton } from '../../shared/Buttons';

function EandIA_E({ onClose }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    onClose();
    navigate.push('/'); // 메인 페이지로 이동
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <h2 style={{ color: '#fff' }}>나의 성향</h2>
        <ImageBox>
          <EImage src={ETypeImage} alt="외향적인 성향 이미지" />
        </ImageBox>
        <p style={{ color: '#fff', marginBottom: '10px' }}>외향적인 성향</p>
        <p style={{ color: '#fff', marginBottom: '20px' }}>
          외향적인 사람은 활발하고 사교적입니다.
          <div>매력적인 성격으로 주변 사람들과 쉽게 친구가 될 수 있으며, 새로운 사람들과의 인연을 즐깁니다.</div>{' '}
          긍정적인 에너지를 뿜어내어 주변을 밝게 만들어주는 장점이 있습니다.
        </p>
        <PurpleButton onClick={onClose}>닫기</PurpleButton>
        <PurpleButton onClick={handleGoBack}>메인 페이지로</PurpleButton>
      </ModalContent>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #8785a2;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* 글자 중앙 정렬 */

  h2 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 24px; /* 글자 크기 조정 */
  }

  h3 {
    color: #fff;
    margin-bottom: 10px;
    font-size: 18px; /* 글자 크기 조정 */
  }
`;

const ImageBox = styled.div`
  background-color: #f6f6f6;
  width: 300px;
  height: 300px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const EImage = styled.img`
  width: 200px;
  height: 200px;
`;

export default EandIA_E;
