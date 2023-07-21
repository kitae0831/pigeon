import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../color.css';

function Layout() {
  const navigate = useNavigate();

  return (
    <Container>
      <Contents>
      <Header>
        <Main onClick={() => navigate('/')} >
          오구오구
        </Main>
        <FreeBoard onClick={() => navigate('/free-board')}>자유게시판</FreeBoard>
      </Header>
  
      <Outlet />
      </Contents>
      <Footer>
        <div>React 아웃소싱 프로젝트</div>
        {/* <a
          href="https://www.flaticon.com/kr/free-icons/"
          title="오리너구리 아이콘"
          style={{ textDecoration: 'none', color: 'black' }}
        /> */}
        <div>B반 9조 비둘기</div>
      </Footer>
      
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 100%;
  top: 0;
  // min-height: 100vh;
  position: relative;
  // padding-bottom: 90px;
  // box-sizing: border-box;
  // background-image: linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(252, 247, 247, 0.3));
  // background-position: center;
  // background-size: cover;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  margin-top: 0;
  align-items: center;
  background-color: rgba( 255, 255, 255, 0.5 );
  color: white;
  font-weight: bold;
  height: 2.9rem;
`;

const Main = styled.p`
 text-decoration: none;
 color: black;
 &:hover {
  cursor: pointer;
}
`

const FreeBoard = styled.p`
  color: black;
  &:hover {
    cursor: pointer;
  }
`

const Contents = styled.div`
  min-height: calc(100vh - 2.9rem);
  position: relative;
`
const Footer = styled.footer`
  display: flex;
  height: 2.9rem;
  justify-content: space-between;
  background-color: rgba( 255, 255, 255, 0.5 );
  color: black;
  /* position: absolute;
  bottom: 0; */
  width: 100%;
  box-sizing: border-box;
  padding: 20px;
  
  // display: flex;
  // justify-content: space-between;
  // background-color: none;
  // color: black;
  // width: 100%;
  // box-sizing: border-box;
  // position: relative;
  // transform: translateY(-100%);
`;
