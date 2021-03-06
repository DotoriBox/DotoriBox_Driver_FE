import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import { CustomerAPI, InfoAPI, StockAPI } from "../API";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import * as dateFns from 'date-fns';

const ArrowRight = styled(BsArrowRight)`
  margin: auto 0 auto auto;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TaxiText = styled.div`
  margin: 15px 0 1.75rem 0;
  color: #707070;
  font-size: 0.75rem;
`;

const HiText = styled.div`
  font-size: 1.25rem;
  font-weight: bolder;
`;

const NameText = styled.div`
  font-size: 1.875rem;
  font-weight: bolder;
  margin-bottom: 1.188rem;
`;

const ContentText = styled.div`
  font-size: 0.813rem;
  padding-bottom: 2.8%;
  color: #707070;
  margin-bottom: 2.438rem;
`;

const TitleText = styled.div`
  font-size: 0.938rem;
  font-weight: bold;
  margin: 0 0 1.25rem 0;
`;
const TitleTextPrice = styled(TitleText)`
  margin-top: 3.563rem;
  margin-bottom: 0.875rem;
`;

const SampleButton = styled.div`
  border-radius: 3px;
  border: solid 1px #eaeaea;
  font-weight: bold;
  display: flex;
  padding: 10px;
`;

const ForPadding = styled.div`
  margin-bottom: 2%;
`;

const GrayButton = styled.div`
  color: #afabab;
  font-size: 0.688rem;
  text-decoration: underline;
  margin-top: 1.25rem;
  margin-bottom: 3.563rem;
`;
const GrayText = styled.div`
  color: #afabab;
  font-size: 0.688rem;
  margin-bottom: 0.875rem;
`;

const IncomeText = styled.div`
  font-size: 0.938rem;
  font-weight: bold;
`;
const IncomeText2 = styled.div`
  font-size: 1.125rem;
  font-weight: bold;
`;

function MainPage() {
  const location = useLocation();

  const [userInfo, setUserInfo] = useState(undefined);
  const [performance, setPerformance] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [percentage, setPercentage] = useState(undefined);

  const { token, id } = location.state;

  useEffect(() => {
    const fetch = async () => {
      console.log(location.state);
      const userInfo = await InfoAPI.getDriverInfoByDriverId(token['access-token'], id);
      setUserInfo(userInfo.data);

      const perform = await StockAPI.getStock(userInfo.data.driver.taxi.id);
      setPerformance(perform.data)

      const customers = await CustomerAPI.getCustomer(userInfo.data.driver.taxi.id);
      setCustomer(customers.data);

      const now = customer.map((elem) => {
        if (elem.createdAt > dateFns.startOfMonth(Date.now()))
          return elem;
      }).length

      const before = customer.map((elem) => {
        if (elem.createdAt > dateFns.startOfMonth(dateFns.subMonths(Date.now(), 1).setDate({day: 1})))
          return elem;
      }).length

      setPercentage(now / (before - now) * 100);

      console.log(userInfo.accountNumber.length);
    }

    fetch();
  }, []);

  return (
    <>
      {/* API??? ?????? ?????? */}
      <TaxiText>
        {userInfo && userInfo.isCorporation ? "??????" : "??????"}??????(
        {userInfo && userInfo.platform.name})
      </TaxiText>
      <HiText>???????????????</HiText>
      <NameText>{userInfo && userInfo.driver.name} ?????????</NameText>
      <ContentText>
        ???????????? ?????? ?????? ??????,
        <br />
        ?????????????????? ?????? ????????? ???????????????
      </ContentText>

      <TitleText>?????? ?????? ??????</TitleText>
      <SampleButton>
        { performance.reduce((a, b) => {
          return a + b.stock;
        }, 0) }??? ??????????????????.
        <ArrowRight />
      </SampleButton>
      <GrayButton>?????? ?????? ????????????</GrayButton>

      <TitleTextPrice>?????? ??? ?????? ??????</TitleTextPrice>
      <GrayText>
        {
          userInfo && userInfo.accountNumber ? 
            <>
              ???????????? {userInfo && userInfo.accountNumber.split(' ')[0]}
              ?????? ??????({userInfo && userInfo.accountNumber.split(' ')[1]})??? ?????? ???????????????
            </> :
            <>
              ?????? ????????? ?????? ????????? ????????????.
            </>
        }
      </GrayText>
      <SampleButton>
        {
          customer.map((elem) => {
            if (elem.createdAt > dateFns.startOfMonth(Date.now()))
              return elem;
          }).length * 500
        }???
        <ArrowRight />
      </SampleButton>
      <GrayButton>?????? ???????????? ??????/ ????????????</GrayButton>

      {
        isNaN(percentage) ? 
          <IncomeText>
            ?????? ??? ????????? ????????????.
          </IncomeText> : 
          <>
            <IncomeText>?????? ??? ????????????</IncomeText>
            <IncomeText2>{percentage}% ?????????????????????????</IncomeText2>
          </>
      }
     </>   
  );
}

export default MainPage;
