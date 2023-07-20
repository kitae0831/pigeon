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
        오구오구
        </Link>
        <div
          style={{
            display: 'flex',
            gap: '12px'
          }}
        >
        </div>
      </Header>
      <Outlet />
      <Footer>
        <div>React 아웃소싱 프로젝트</div>
        <a
        href="https://www.flaticon.com/kr/free-icons/"
        title="오리너구리 아이콘"
        style={{textDecoration: "none", color: "black"}}
        >오리너구리 아이콘  제작자: Flat Icons - Flaticon</a>
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
  padding: 20px;
  align-items: center;
  height: 10px;
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
