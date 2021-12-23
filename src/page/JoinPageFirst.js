import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import styled from 'styled-components';

import style from "../components/PageResource";
import Dropdown from "../components/Dropdown.js";
import Progressbar from "../components/Progressbar";

//test
import ComboBox from '../components/ComboBox';
import ComboBoxHour from '../components/ComboboxHour';

const { Button, Footer, Header, Text } = style;

const Main = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;

`;

const Info2 = styled.div`
  text-align: left;
  padding: 1.8% 0 0 0;
`;

const Info3 = styled.div`
  text-align: left;
  padding: calc(35px + 8%) 0 1.8% 0;
`;

const TextGender = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  letter-spacing: -0.13px;
`;

const GenderButton = styled.button`
  width: 48vw;
  margin-left: ${props => props.isLeft? 0 : '10px'};
  margin-right: ${props => props.isLeft? '10px' : 0};
  height: 50px;
  border-radius: 5px;
  border: solid 0.5px #eaeaea;
  background-color: ${props => props.selected ? "#c4442a" : '#fff'};
  color: ${props => props.selected ? "#fff" : "#6a707e"};
  font-weight: bold;
`;

const BtnContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const SubmitButton = styled(Button)`
  background-color : ${props => props.BColor};
`;


function JoinPageFirst() {

    const [gender, setGender] = useState(undefined);

    useEffect(() => {}, [gender]);
  
    const [selected, setSelected] = useState(undefined);
    const navigate = useNavigate();
  
    // const location = useLocation();
    // const code = location.state.code;
    // const taxiId = location.state.taxiId;

    const onSubmit = () => {
        // navigate.push({pathname : '/recommend' , state : {  }})
      }

    return(
        <Main>
        <Progressbar state={0} />
        <Header>도토리 박스<br/>회원가입하기</Header>
  
        <Info2>
          <Text>
            세상에서 제일 쉬운 택시광고,<br />
            도토리박스와 함께 즐거운 운행하세요
          </Text>
        </Info2>
  
        <Info3>
          <TextGender>소속</TextGender>
        </Info3>
        <BtnContainer>
          <GenderButton
            onClick={() => setGender(true)}
            selected={gender === true}
            isLeft={true}
          >
            개인택시
          </GenderButton>
          <GenderButton
            onClick={() => setGender(false)}
            selected={gender === false}
          >
            법인택시
          </GenderButton>
        </BtnContainer>
        <Info3>
          <TextGender>제휴된 택시 플랫폼</TextGender>
        </Info3>
        <ComboBox/>
        <Info3>
            <TextGender>일주일 평균 운행시간</TextGender>
            </Info3>
            

            {/* 프롭스로 왜 넘겨주는지 확인하기 */}
            {/* <Dropdown selected={selected} setSelected={setSelected} /> */}
            <ComboBoxHour/>
        <Footer>
          <SubmitButton onClick={(selected !== undefined) && (gender !== undefined)? () => onSubmit() : NaN} BColor={ (gender!==undefined) && (selected !== undefined) ? "#c4442a":"#707070"}>확인</SubmitButton>
        </Footer>
      </Main>
    );
}

export default JoinPageFirst;