import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import '../color.css';

function Layout() {
  // const [step, setStep] = useState(0);

  // const getImg = (props) => {
  //   if (slidesData[0].id == 1) {
  //     return slidesData[0].img;
  //   }
  // };

  return (
    <Container>
      <Header>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          오구오구
        </Link>
        {/* <div
          style={{
            display: 'flex',
            gap: '12px'
          }}
        ></div> */}
      </Header>
      <Outlet />
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
  width: '100%';
  height: '100%';
  top: '0';
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
  padding: 20px;
  align-items: center;
  background-color: none;
  color: white;
  font-weight: bold;
`;

const Footer = styled.footer`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
  padding: 24px;
  background-color: none;
  color: black;
  position: fixed;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  // height:;
  // display: flex;
  // justify-content: space-between;
  // padding: 24px;
  // background-color: none;
  // color: black;
  // width: 100%;
  // box-sizing: border-box;
  // position: relative;
  // transform: translateY(-100%);
`;
