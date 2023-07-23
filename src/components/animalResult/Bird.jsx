import React from 'react';
import Birds from '../../assets/Birds.png';
import { styled } from 'styled-components';

function Bird() {
  return (
    <Container>
      <MainBox>
        <div>
          <BirdImg src={Birds} alt="" />
        </div>
        <ContetnsBox>
          <h1>당신은 새와 비슷한 성격을 가진 사람입니다.</h1>
          <h3>자유로움과 적극성으로 주변 사람들을 밝게 만들어주는 타입이에요.</h3>
          <p>
            당신은 새와 같이 자유롭고 적극적인 성격을 가지고 있습니다.
            <br />
            새는 하늘을 날아 다니는 것처럼 당신도 새로운 경험을 추구하고 새로운 환경에 적응하는 데 자신감이 있습니다.{' '}
            <br />
            주변 사람들과 소통하며 사회적인 모임을 즐기는 편이며, 새로운 도전에 흥미를 느낍니다. <br />
            새는 그룹 속에서도 개인적인 자유를 중요하게 생각하는데, 이와 같이 당신도 자신의 생각과 견해를 소중히 여기는
            편입니다.
          </p>
        </ContetnsBox>
      </MainBox>
    </Container>
  );
}

export default Bird;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainBox = styled.div``;

const ContetnsBox = styled.div``;

const BirdImg = styled.img`
  width: 500px;
  height: 500px;
`;
