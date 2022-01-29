import React, { useState } from 'react';
import styled from 'styled-components';
import { GoTriangleDown } from "react-icons/go";
 
const TriangleDownIcon = styled(GoTriangleDown)`
        right : 0;
        margin: auto 0 auto auto;
        color: #afabab;
    `;

const Combobox = styled.div`
    width: 100%;
    position: relative;
    
`;

const ComboboxBtn = styled.div`
    padding : 10px;
    background: #fff;
    font-weight: 500;
    color: #90959f;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor : pointer; 
    border-bottom: 1px solid #afabab;
    position: relative;
    
`;

const Content = styled.div`
    position: absolute;
    top:0;
    left: 0;
    background: #fff;
    box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
    border: solid 1px #afabab;
    font-weight: 500;
    color: #333;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 1000;
    height: 300%;
    overflow: auto;
`;

const Item = styled.div`
    padding: 10px;
    cursor : pointer; 
    transition: all 0.2s;
    border-bottom: solid 1px #afabab;
    color: #90959f;
    &:hover {
        background-color: #707070;
        color: #fff;
    }
`;

function ComboBox(props){

const [ isActive, setActive ] = useState(false);
const options = { '1~10시간': 0, '11~20시간':1, '21~30시간':2, '31~40시간':3, '41~50시간':4, '51~60시간':5 }

const [ selected, setSelected ] = useState({ key:'선택해주세요', data:0 });

    return(
        <Combobox>
            <ComboboxBtn onClick={() => {setActive(!isActive)}}>
                { selected.key } <TriangleDownIcon/>
            </ComboboxBtn>
            {isActive && (
            <Content>
                {Object.keys(options).map((key,index)=>(
                    <Item onClick={() => {setActive(!isActive); setSelected({ key, data: options[key] }); props.setTaxiHour(index)
                    }}>
                        {key}
                    </Item>
                ))}
            </Content>
            )}
        </Combobox>
    );
}
export default ComboBox;