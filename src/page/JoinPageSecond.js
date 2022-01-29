import React, {useState} from 'react';
import styled from 'styled-components';
import Progressbar from "../components/Progressbar";
import style from "../components/PageResource";

import DropdownPic from '../components/DropdownPic';
import PictureBtn from '../components/PictureBtn';
import DetailAddress from '../components/DetailAddress';


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


const SubmitButton = styled(Button)`
  background-color : ${props => props.BColor};
`;


function JoinPageSecond() {

  const [checkAddress, setCheckAddress ] = useState(undefined);

  return (
    <Main id='parentDom'>
      <Progressbar state={1} />
      <Header>도토리 박스<br />회원가입하기</Header>

      <Info2>
        <Text>
          세상에서 제일 쉬운 택시광고,<br />
          도토리박스와 함께 즐거운 운행하세요
        </Text>
      </Info2>
      <Info3>
          <TextGender>거주지 주소</TextGender>
      </Info3>
      <DropdownPic setCheckAddress={setCheckAddress}/>
      {(checkAddress!==undefined) && <DetailAddress></DetailAddress>}
      <Info3>
          <TextGender>운전자면허증 (앞면)</TextGender>
      </Info3>
      <PictureBtn/>
      <Info3>
          <TextGender>운전자면허증 (뒷면)</TextGender>
      </Info3>
      <PictureBtn/>

      {/* <Camera/> */}
      <Footer>
          <SubmitButton BColor={'blue'} >확인</SubmitButton>
        </Footer>
    </Main>

  );
}

export default JoinPageSecond;