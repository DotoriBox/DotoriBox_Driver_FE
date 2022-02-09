import styled from 'styled-components';

const Container = styled.input`
    width: calc(100% - 20px);
    border: 0;
    border-bottom: 2px solid #eaeaea;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 25px;
    font-size: 16px;
    outline: 0;
    color: #90959f;
    font-weight: 500;
    font-family: 'Spoqa Han Sans Neo';
    &::-webkit-input-placeholder {
        color: #90959f
    }
`;

function DetailAddress({ setAddress, Address }){
    function onChange(e) {
        setAddress({ ...Address, detail: e.target.value });
    }

    return(
        <Container onChange={onChange} placeholder="상세 주소를 입력해주세요"/>
    );
}

export default DetailAddress;