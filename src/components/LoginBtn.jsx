import React from "react";
import styled from "styled-components";
import NaverBtn from '../img/NaverBtn.png';

const Login = styled.div`
  width: 100%;
  height: 50px;
  background-color: #03C75A;
  border-radius: 5px;
  margin-top: auto;
`;

const LoginImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${NaverBtn});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

function LoginBtn({ onClick }) {
  return (
    <Login onClick={onClick}>
      <LoginImg /> 
    </Login>
  );
}

export default LoginBtn;
