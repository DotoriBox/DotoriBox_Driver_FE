import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";

import { Button, Footer, Header, Text } from "../components/PageResource";
import Progressbar from "../components/Progressbar";

import { BsCheck } from "react-icons/bs";

//test
import ComboBox from "../components/ComboBox";
import ComboBoxHour from "../components/ComboboxHour";
import { AuthAPI, InfoAPI } from "../API";

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Info2 = styled.div`
  text-align: left;
`;

const Info3 = styled.div`
  text-align: left;
  padding: calc(35px + 4%) 0 1.8% 0;
`;

const Title = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  letter-spacing: -0.13px;
`;

const TaxiTypeButton = styled.button`
  width: 48vw;
  margin-left: ${(props) => (props.isLeft ? 0 : "10px")};
  margin-right: ${(props) => (props.isLeft ? "10px" : 0)};
  height: 50px;
  border-radius: 5px;
  border: solid 0.5px #eaeaea;
  background-color: ${(props) => (props.selected ? "#c4442a" : "#fff")};
  color: ${(props) => (props.selected ? "#fff" : "#6a707e")};
  font-weight: bold;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled(Button)`
  background-color: ${(props) => props.BColor};
`;

const Terms = styled.div`
  display: flex;
  margin-top: 16%;
`;

const Checkbox = styled.div`
  width: 1rem;
  height: 1rem;
  border: solid 2px #95989a;
  border-radius: 4px;
  margin-right: 2.9%;
`;

const TermsText = styled.div`
  color: ${(props) => props.color};
  text-decoration: underline;
  font-size: 0.688rem;
  font-weight: 500;
  margin: auto auto auto 0;
`;

const CheckIcon = styled(BsCheck)`
  left: 0;
`;

const Test = styled.div`
  border: solid 2px #95989a;
`;

function JoinPageFirst() {
  const [TaxiType, setTaxiType] = useState(undefined);
  const [TaxiHour, setTaxiHour] = useState(undefined);
  const [TaxiName, setTaxiName] = useState(undefined);
  const [check, setCheck] = useState(undefined);
  const [type, setType] = useState(undefined);
  const [userInfo, setUserInfo] = useState({
    'access-token': undefined,
    id: undefined,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { id } = location.state;
  const access_token = location.state['access-token'];

  useEffect(() => {
    const fetch = async () => {
      setUserInfo({ 'access-token': access_token, id });

      const data = await InfoAPI.getDriverInfoIsExistByDriverId(access_token, id);
      console.log(data.data.isExist);
      if (data.data.isExist === true) {
        navigate("/mainpage", {
          state: {
            token: { 'access-token' : access_token },
            id,
          },
        });
      }
      return { access_token, id };
    };

    fetch()
      .catch((err) => {
        console.log(err);
        if (err.response.status !== 404) {
          console.log("Error");
        }
      });
  }, []);

  const onSubmit = () => {
    if (
      TaxiType !== undefined &&
      TaxiHour !== undefined &&
      check !== undefined &&
      type !== undefined
    )
      navigate("/joinpage2", {
        state: {
          token: userInfo,
          data: { TaxiType, TaxiHour, TaxiName, isCorporation: type, id },
        },
      });
    else console.log("입력 안됨");
  };

  const onAgree = () => {
    if (check === true) {
      setCheck(false);
    } else if (check === false) {
      setCheck(true);
    } else {
      setCheck(true);
    }
  };

  return (
    <Main>
      <Progressbar state={0} />
      <Header>
        도토리박스
        <br />
        회원가입하기
      </Header>

      <Info2>
        <Text>
          세상에서 제일 쉬운 택시광고,
          <br />
          도토리박스와 함께 즐거운 운행하세요
        </Text>
      </Info2>

      <Info3>
        <Title>소속</Title>
      </Info3>
      <BtnContainer>
        <TaxiTypeButton
          onClick={() => {
            setTaxiType(false);
            setType(true);
          }}
          selected={TaxiType === false}
          isLeft={true}
        >
          개인택시
        </TaxiTypeButton>
        <TaxiTypeButton
          onClick={() => {
            setTaxiType(true);
            setType(false);
          }}
          selected={TaxiType === true}
          isLeft={false}
        >
          법인택시
        </TaxiTypeButton>
      </BtnContainer>

      <Info3>
        <Title>제휴된 택시 플랫폼</Title>
      </Info3>
      <ComboBox setTaxiName={setTaxiName} />

      <Info3>
        <Title>일주일 평균 운행시간</Title>
      </Info3>
      <ComboBoxHour setTaxiHour={setTaxiHour} />

      <Terms>
        <Checkbox onClick={() => onAgree()}>
          {check && <CheckIcon color="#c4442a" />}
        </Checkbox>
        <TermsText color={check === true ? "#c4442a" : "#95989a"}>
          운전자 계약 약관에 동의하기
        </TermsText>
      </Terms>

      <Footer>
        <SubmitButton
          onClick={() => onSubmit()}
          BColor={
            TaxiHour !== undefined &&
            TaxiName !== undefined &&
            TaxiType !== undefined &&
            type !== undefined &&
            check !== undefined
              ? "#c4442a"
              : "#707070"
          }
        >
          확인
        </SubmitButton>
      </Footer>
    </Main>
  );
}

export default JoinPageFirst;
