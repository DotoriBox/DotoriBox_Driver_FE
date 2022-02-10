import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import NaverBtn from '../img/NaverBtn.png';
import { NaverApi } from '../API';
import { useNavigate } from 'react-router-dom';

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  width: 100%;
  background: url("../../src/img/mainimg.png");
`;

const Header = styled.div`
  font-size: 1.563rem;
  font-weight: bolder;
  padding: calc(35px + 8%) 0 1.8% 0;
  letter-spacing: -0.25px;
`;

const Info1 = styled.div`
  text-align: left;
`;

const Text1 = styled.p`
  font-size: 0.813rem;
  letter-spacing: -0.13px;
`;

const NaverLogin = styled.img`
`;

const Test = styled.img`
`;

function RandingPage() {
  const [token, setToken] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== undefined && token.accessToken) navigate('/joinpage1');
  });

  return (
    <Main>
      <Header>
        무료 설치,
        <br />
        쉬운 탈 부착으로 샘플광고
      </Header>
      <Info1>
        <Text1>
          도토리박스와 함께하는 택시 운행으로
          <br />
          더 많은 광고 수익을 얻으세요!
        </Text1>
      </Info1>
      <NaverLogin src={NaverBtn} onClick={() => {
        window.location.href = 'http://localhost:5000/auth'
      }} />
    </Main>
  );
}

export default RandingPage;
