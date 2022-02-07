import React, { useRef, useState } from "react";
import styled from "styled-components";
import Progressbar from "../components/Progressbar";
import style from "../components/PageResource";

import DropdownPic from "../components/DropdownPic";
import PictureBtn from "../components/PictureBtn";
import DetailAddress from "../components/DetailAddress";

import { ImageAPI, InfoAPI } from "../API";
import { useLocation } from "react-router-dom";

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
  background-color: ${(props) => props.BColor};
`;

function JoinPageSecond() {
  const [checkAddress, setCheckAddress] = useState(undefined);
  const [LicenseImage, setLicenseImage] = useState({
    driver: undefined,
    taxi: undefined,
  });

  const driverRef = useRef();
  const taxiRef = useRef();

  const { state } = useLocation();

  function onTakePicture(e) {
    if (e.target.name === "taxi") {
      ImageAPI.postTaxiLicense(state.token.access_token, e.target.file).then(
        (res) => {
          setLicenseImage({ ...LicenseImage, taxi: res.data });
        }
      );
    } else {
      ImageAPI.postDriverLicense(state.token.access_token, e.target.file).then(
        (res) => {
          setLicenseImage({ ...LicenseImage, driver: res.data });
        }
      );
    }
  }

  function onSubmit() {
    ImageAPI.createImageData(state.token.access_token, {
      driverLicenseImage: LicenseImage.driver,
      taxiLicenseImage: LicenseImage.taxi,
    });

    InfoAPI.postDriverInfo(state.token.access_token, {
      isCorporation: state.data.TaxiType,
      drivingTime: state.data.TaxiHour,
      platformId: state.data.TaxiName,
      residence: checkAddress
    })
  }

  return (
    <Main id="parentDom">
      <Progressbar state={1} />
      <Header>
        도토리 박스
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
        <TextGender>거주지 주소</TextGender>
      </Info3>
      <DropdownPic setCheckAddress={setCheckAddress} />
      {checkAddress !== undefined && <DetailAddress />}
      <Info3>
        <input
          ref={driverRef}
          name="driver"
          type="file"
          accept="image/*"
          catpure="camera"
          onChange={onTakePicture}
        />
        <TextGender>운전자면허증 (앞면)</TextGender>
      </Info3>
      <PictureBtn picRef={driverRef} />
      <Info3>
        <input
          ref={taxiRef}
          name="taxi"
          type="file"
          accept="image/*"
          catpure="camera"
          onChange={onTakePicture}
        />
        <TextGender>택시면허증 (앞면)</TextGender>
      </Info3>
      <PictureBtn picRef={taxiRef} />

      {/* <Camera/> */}
      <Footer>
        <SubmitButton BColor={"blue"} onClick={() => onSubmit()}>확인</SubmitButton>
      </Footer>
    </Main>
  );
}

export default JoinPageSecond;
