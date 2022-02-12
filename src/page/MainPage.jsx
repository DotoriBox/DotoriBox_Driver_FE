import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";
import { InfoAPI, StockAPI } from "../API";
import { useLocation } from "react-router-dom";
import { useState } from "react";

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
  const [performance, setPerformance] = useState(undefined);

  const { token, id } = location.state;

  useEffect(() => {
    const fetch = async () => {
      const userInfo = await InfoAPI.getDriverInfoByDriverId(token.accessToken, id);
      setUserInfo(userInfo.data);

      const perform = await StockAPI.getStock(token.accessToken, userInfo.data.driver.taxi.id);
      setPerformance(perform);
    }

    fetch();
  }, []);

  return (
    <>
      {/* API로 변경 예정 */}
      <TaxiText>
        ${userInfo && userInfo.isCorporation ? "법인" : "개인"}택시($
        {userInfo && userInfo.platform.name})
      </TaxiText>
      <HiText>안녕하세요</HiText>
      <NameText>${userInfo && userInfo.driver.name} 기사님</NameText>
      <ContentText>
        세상에서 제일 쉬운 광고,
        <br />
        도토리박스와 함께 즐거운 운행하세요
      </ContentText>

      <TitleText>전체 샘플 현황</TitleText>
      <SampleButton>
        {

        }개 남아있습니다.
        <ArrowRight />
      </SampleButton>
      <GrayButton>샘플 추가 주문하기</GrayButton>

      <TitleTextPrice>이번 달 정산 금액</TitleTextPrice>
      <GrayText>기사님의 **은행 계좌(**)로 입금 예정입니다</GrayText>
      <SampleButton>
        91,500원
        <ArrowRight />
      </SampleButton>
      <GrayButton>입금 계좌정보 입력/ 수정하기</GrayButton>

      <IncomeText>지난 달 수익보다</IncomeText>
      <IncomeText2>**% 줄어들었습니다😅</IncomeText2>
    </>
  );
}

export default MainPage;
