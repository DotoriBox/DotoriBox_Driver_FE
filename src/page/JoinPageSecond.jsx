import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import Progressbar from "../components/Progressbar";
import { Button, Footer, Header, Text } from "../components/PageResource";

import DropdownPic from "../components/DropdownPic";
import PictureBtn from "../components/PictureBtn";
import DetailAddress from "../components/DetailAddress";

import { ImageAPI, InfoAPI } from "../API";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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
  width: 48%;
`;

const TextGender = styled.div`
  font-size: 0.813rem;
  font-weight: bold;
  letter-spacing: -0.13px;
`;

const SubmitButton = styled(Button)`
  background-color: ${(props) => props.BColor};
`;

const Image = styled.input`
  display: none;
`;

const ImageBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

function JoinPageSecond() {
  const [checkAddress, setCheckAddress] = useState(undefined);
  const [address, setAddress] = useState({
    address: undefined,
    detail: undefined,
  });
  const [LicenseImage, setLicenseImage] = useState({
    driver: undefined,
    taxi: undefined,
  });

  const driverRef = useRef();
  const taxiRef = useRef();

  const Navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);

  function onTakePicture(e) {
    e.preventDefault();
    let formData = undefined;

    if (e.target.files[0] !== undefined) {
      const uploadFile = e.target.files[0];
      formData = new FormData();
      formData.append("attachments", uploadFile);
    }

    if (e.target.name === "taxi") {
      ImageAPI.postTaxiLicense(state.token['access-token'], formData).then(
        (res) => {
          setLicenseImage({ ...LicenseImage, taxi: res.data });
        }
      );
    } else {
      ImageAPI.postDriverLicense(state.token['access-token'], formData).then(
        (res) => {
          setLicenseImage({ ...LicenseImage, driver: res.data });
        }
      );
    }
  }

  function onSubmit() {
    if (
      address.address &&
      address.detail &&
      LicenseImage.driver &&
      LicenseImage.taxi
    ) {
      ImageAPI.createImageData(state.token['access-token'], {
        driverLicenseImage: LicenseImage.driver,
        taxiLicenseImage: LicenseImage.taxi,
      });

      InfoAPI.postDriverInfo(state.token['access-token'], {
        isCorporation: state.data.TaxiType,
        drivingTime: state.data.TaxiHour,
        platformId: state.data.TaxiName,
        residence: `${address.address} ${address.detail}`,
      });

      Navigate("/successjoin", {
        state: { 'access-token': state.token['access-token'], id: state.data.id },
      });
    }
  }

  return (
    <Main id="parentDom">
      <Progressbar state={1} />
      <Header>
        ???????????????
        <br />
        ??????????????????
      </Header>

      <Info2>
        <Text>
          ???????????? ?????? ?????? ????????????,
          <br />
          ?????????????????? ?????? ????????? ???????????????
        </Text>
      </Info2>
      <Info3>
        <TextGender>????????? ??????</TextGender>
      </Info3>
      <DropdownPic
        setCheckAddress={setCheckAddress}
        setAddress={setAddress}
        Address={address}
      />
      <DetailAddress
        setCheckAddress={setCheckAddress}
        setAddress={setAddress}
        Address={address}
      />

      <Image
        ref={taxiRef}
        name="taxi"
        type="file"
        accept="image/*"
        catpure="camera"
        onChange={onTakePicture}
      />
      <Image
        ref={driverRef}
        name="driver"
        type="file"
        accept="image/*"
        catpure="camera"
        onChange={onTakePicture}
      />

      <ImageBox>
        <>
          <Info3>
            <TextGender>?????????????????? (??????)</TextGender>
            <PictureBtn picRef={driverRef} img={LicenseImage.driver} />
          </Info3>
        </>
        <>
          <Info3>
            <TextGender>??????????????? (??????)</TextGender>
            <PictureBtn picRef={taxiRef} img={LicenseImage.taxi} />
          </Info3>
        </>
      </ImageBox>

      {/* <Camera/> */}
      <Footer>
        <SubmitButton
          BColor={
            address.address &&
            address.detail &&
            LicenseImage.driver &&
            LicenseImage.taxi
              ? "#c4442a"
              : "#707070"
          }
          onClick={() => onSubmit()}
        >
          ??????
        </SubmitButton>
      </Footer>
    </Main>
  );
}

export default JoinPageSecond;
