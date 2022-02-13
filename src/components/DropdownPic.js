import React, { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import styled from "styled-components";
import DetailAddress from "../components/DetailAddress";

//api
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";

const DropdownPicBtn = styled.div`
  width: 100%;
  border-bottom: 2px solid #eaeaea;
  color: #90959f;
`;

const SearchIcon = styled(IoMdSearch)`
  right: 0;
  margin: auto 0 auto auto;
  color: #6a707e;
`;

const Container = styled.div`
  padding: 10px;
  background: #fff;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* cursor : pointer;  */
`;

const ParentDom = styled.div`
  display: flex;
  height: 100%;
`;

const PopupDomS = styled(PopupDom)`
  display: flex;
`;

function DropdownPic({ setAddress, Address }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPostcode = () => {
    setIsPopupOpen(true);
  };

  const closePostcode = () => {
    setIsPopupOpen(false);
  };


  return (
    <DropdownPicBtn>
      <Container>
        {Address.address !== undefined ? (
          Address.address
        ) : (
          <>
            지번/도로명을 입력해주세요
            <SearchIcon onClick={openPostcode} />
          </>
        )}
        <ParentDom id="popupDom">
          {isPopupOpen && (
            <PopupDomS>
              <PopupPostCode
                setFullAddress={setAddress}
                Address={Address}
                onClose={closePostcode}
              />
            </PopupDomS>
          )}
        </ParentDom>
      </Container>
    </DropdownPicBtn>
  );
}

export default DropdownPic;
