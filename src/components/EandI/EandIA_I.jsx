import React from 'react';
import { useNavigate } from 'react-router-dom';
import ITypeImage from '../../assets/I형.png';
import { styled } from 'styled-components';
import { GreenButton } from '../../shared/Buttons';

function EandIA_I({ onClose }) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    onClose();
    navigate('/');
  };


  return (
    <ModalOverlay>
      <ModalContent>
        <h2 style={{ color: '#fff' }}>나의 성향</h2>
        <ImageBox>
          <IImage src={ITypeImage} alt="내향적인 성향 이미지" />
        </ImageBox>
        <p style={{ color: '#fff', marginBottom: '10px' }}>내향적인 성향</p>
        <p style={{ color: '#fff', marginBottom: '20px' }}>
          내향적인 사람은 고양이처럼 조용하고 내성적입니다. 혼자 있는 시간을 즐기고,
          <div>자신만의 생각에 깊이 몰두할 수 있는 장점이 있습니다.</div> 진중하고 신중한 성격으로, 주변의 평가에 크게
          영향을 받지 않는 자립심이 강합니다.
        </p>
        <GreenButton onClick={onClose}>다시하기</GreenButton>
        <GreenButton onClick={handleGoBack}>메인 페이지로</GreenButton>
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
const IImage = styled.img`
  width: 200px;
  height: 200px;
`;

export default EandIA_I;
