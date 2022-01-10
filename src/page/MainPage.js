import styled from 'styled-components'

const TaxiText = styled.div`
    margin: 15px 0 calc(20px + 8%) 0;
    color: '#707070';
    font-size: 0.75rem;
`;

function MainPage(){
    
    return(
        <>
            {/* API로 변경 예정 */}
            <TaxiText>개인택시(카카오T)</TaxiText>
        </>
    );
}

export default MainPage;