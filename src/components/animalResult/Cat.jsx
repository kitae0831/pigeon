import React from 'react';
import Cats from '../../assets/Cats.png';
import { styled } from 'styled-components';

function Cat() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <MainBox>
        <div>
          <CatImg src={Cats} alt="" />
        </div>
        <ContetnsBox>
          <h1>당신은 고양이와 비슷한 성격을 가진 사람입니다.</h1>
          <h3>독립적이면서도 민첩하고 혼자서도 즐거움을 찾는 타입이에요.</h3>
          <p>
            당신은 고양이와 같이 독립적이고 자기만의 공간과 시간을 중요하게 여깁니다. 혼자서도 즐거운 시간을 보내는 것을
            좋아하며, 자신만의 생각과 감정을 깊이 생각하는 경향이 있습니다.
            <br />
            주변 사람들과의 교류보다는 소수의 친밀한 친구들과 좋아하는 취미나 관심사를 즐기는 것을 선호합니다.
            <br />
            뛰어난 관찰력과 민감성으로 주변 사람들을 잘 이해하고 지지해 줄 수 있습니다.
            <br />
            당신은 새와 같이 자유롭고 적극적인 성격을 가지고 있습니다.
          </p>
        </ContetnsBox>
      </MainBox>
    </div>
  );
}

export default Cat;

const MainBox = styled.div``;

const ContetnsBox = styled.div``;

const CatImg = styled.img`
  width: 500px;
  height: 500px;
`;
