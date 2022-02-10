import React from "react";
import styled from "styled-components";

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;
  width: 100%;
  background: url("../../src/img/FinishPage.jpg");
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

function SuccessJoin() {
  return (
    <Main>
      <Header>
        가입이,
        <br />
        완료되었습니다
      </Header>
      <Info1>
        <Text1>
          세상에서 제일 쉬운 택시광고,
          <br />
          도토리박스와 함께 즐거운 운행하세요
        </Text1>
      </Info1>
    </Main>
  );
}

export default SuccessJoin;
