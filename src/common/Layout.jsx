import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../color.css';

function Layout() {
  return (
    <Container>
      <Header>
        <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
          Personality Type test
        </Link>
        <Link to="/freeBoard" style={{ textDecoration: 'none', color: 'white' }}>
          게시판
        </Link>

        <div
          style={{
            display: 'flex',
            gap: '12px'
          }}
        >
          <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}>
            로그인
          </Link>
          <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
            회원가입
          </Link>
        </div>
      </Header>
      <Outlet />
      <Footer>
        <div>React 아웃소싱 프로젝트</div>
        <div>B반 9조 비둘기</div>
      </Footer>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  min-height: 100vh;
  position: relative;
  padding-bottom: 90px;
  box-sizing: border-box;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px;
  background-color: var(--color_pink);
  color: white;
  font-weight: bold;
`;

const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  background-color: var(--color_light_pink);
  color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
`;
