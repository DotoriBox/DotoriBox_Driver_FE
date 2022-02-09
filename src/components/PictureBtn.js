import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ImgSubmit } from '../img/ImageSubmitImg.svg';
import { ReactComponent as ImgCheck } from '../img/ImgSubmittedImg.svg';

const Combobox = styled.div`
    margin-top: 10px;
    width: 100%;
    position: relative;
`;

const ComboboxBtn = styled.div`
    padding : 13px;
    background: #fff;
    color: ${ props => props.img ? '#2AAD40' : '#6a707e'};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor : pointer; 
    border: ${ props => props.img ? 'solid 1px #2AAD40' : 'solid 1px #eaeaea' };
    position: relative;
    font-size: 0.813rem;
    font-weight: bold;
    letter-spacing: -0.13px;
    border-radius: 5px;
`;

const SubmitImg = styled(ImgSubmit)`
    margin-right: 8px;
`;

const SubmitCheck = styled(ImgCheck)`
    margin-right: 8px;
`;


function ComboBox({ picRef, img }) {
    const [isActive, setActive] = useState(false);

    return (
        <Combobox onClick={() => {
            picRef.current.click();
        }}>
            <ComboboxBtn img={img} onClick={() => { setActive(!isActive) }}>
                {
                    img ? <><SubmitCheck />사진 선택 완료</> : <><SubmitImg />사진 첨부</>
                }
            </ComboboxBtn>
        </Combobox>
    );
}
export default ComboBox;