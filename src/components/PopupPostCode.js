import React, { useState } from 'react';
import styled from 'styled-components';
import DaumPostcode from 'react-daum-postcode';

const Container = styled.div`
    position: absolute;
    top: 10%;
    width: 90%;
`;

const PopupPostCode = (props) => {


    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = ''; 
        
        if (data.addressType === 'R') {
          if (data.bname !== '') {
            extraAddress += data.bname;
          }
          if (data.buildingName !== '') {
            extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
          }
          fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        props.setFullAddress(fullAddress)
        console.log(data.zonecode)
        // props.onClose()
    }

    return(
        <Container>
            <DaumPostcode onComplete={handlePostCode} />
        </Container>
    )
    
}

export default PopupPostCode;