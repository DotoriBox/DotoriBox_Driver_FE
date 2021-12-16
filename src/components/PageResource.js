import styled from "styled-components";
import {IoBanSharp} from "react-icons/io5";
import {FcCheckmark} from "react-icons/fc";




const Header = styled.h2`
  padding-bottom: 10px;
  font-size: 1.563rem;
  font-weight: bolder;
`;

const Button = styled.button`
  width: 100%;
  height: 2.875rem;
  font-size: 0.75rem;
  border-radius: 5px;
  border: 0;
  background-color: #c4442a;
  color: #fff;
  bottom: 1.875rem;
  font-weight: 550;
  margin-top: auto;
`;

const Text = styled.p`
  color: #6a707e;
  letter-spacing: -0.13px;
  font-size: 0.813rem;
`;

const Input = styled.input`
  background-color:transparent;
  padding: 0;
  border : 0;
  width: 100%;
  height: 2rem;
  font-family: SpoqaHanSansNeo;
  font-size: 1.25rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  color: ${props => props.white ? '#FFFFFF' : '#000000'};
  ::placeholder {
    font-size: 0.75rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25rem;
    letter-spacing: -0.12px;
    color: #afabab;
  }
`;

const Horizon = styled.hr`
  width: 100%;
  border: solid 0.5px #bcb9b9;
`;

const Footer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const InputContainer = styled.div`
  display : flex;
`;

const Checkmark = styled(FcCheckmark)`
  margin: auto 0 auto auto; 
`;

const BanSharp = styled(IoBanSharp)`
  margin: auto 0 auto auto;
  color: red;
`;

const InputData = ({white, placeholder, onChange, className, checkIcon}) => {

  return (
    <div className={className}>
      <InputContainer>
        <Input white={white} placeholder={placeholder} onChange={onChange} type="text"/>
        {typeof checkIcon ==='undefined' ? <></> : (checkIcon ? <Checkmark/>:<BanSharp/>)}
      </InputContainer>
      <Horizon />
    </div>
  )
}

const Style = { Header, Button, Text, InputData, Footer }

export default Style;