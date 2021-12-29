import React, { useState } from 'react';
import styled from 'styled-components';

const Combobox = styled.div`
    width: 100%;
    position: relative;
    
`;

const ComboboxBtn = styled.div`
    padding : 10px;
    background: #fff;
    color: #6a707e;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor : pointer; 
    border: solid 1px #eaeaea;
    position: relative;
    font-size: 0.813rem;
    font-weight: bold;
    letter-spacing: -0.13px;
`;


function ComboBox() {

    const [isActive, setActive] = useState(false);

    return (
        <Combobox>
            <ComboboxBtn onClick={() => { setActive(!isActive) }}>
                사진을 선택하세요
            </ComboboxBtn>
        </Combobox>
    );
}
export default ComboBox;