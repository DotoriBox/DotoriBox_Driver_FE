import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 0.25rem;
  background-color: #f1f2f4;
  border-radius: 3px;
  display: flex;
  margin: 15px 0 calc(20px + 8%) 0;
`;

const Progress = styled.div`
  width: 33.3333%;
  height: 100%;
  background-color: ${props => props.state ? '#c4442a' : '#f1f2f4'};
  border-radius: 3px;
`;

function Progressbar({ state, className }) {
  return (
    <div className={className}>
      <Container>
        <Progress state={0 === state}/>
        <Progress state={1 === state}/>
        <Progress state={2 === state}/>
      </Container>
    </div>
  );
}

export default Progressbar;