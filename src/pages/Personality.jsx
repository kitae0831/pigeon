import React from 'react';
import EandItset from '../components/EandI/EandItest';
import styled from 'styled-components';

function Personality() {
  return (
    <>
      <Container>
        <EandItset />
      </Container>
    </>
  );
}

export default Personality;

const Container = styled.div`
  background-color: #121721; /* 밤하늘 색상 */
  color: #fff;
  padding: 20px;
`;
