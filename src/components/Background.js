import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

//ex
import imageEx from "../img/ExDriver.png";

const Main = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: auto;
`;

const IMain = styled(Main)`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  /* margin-left: 10%; */
`;

function Background({ children }) {
  const location = useLocation();

  if (location.pathname === "/") return <IMain image={imageEx}>{children}</IMain>;
  else return <Main>{children}</Main>;
}

export default Background;
