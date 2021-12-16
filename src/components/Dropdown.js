import React ,{useState} from 'react';
import './Dropdown.css';
import {GoTriangleDown, GoTriangleUp} from "react-icons/go";
import styled from 'styled-components';

const TriangleDownIcon = styled(GoTriangleDown)`
        right : 0;
        margin: auto 0 auto auto;
        color: #afabab;
    `;

 const TriangleUpIcon = styled(GoTriangleUp)`
        margin: auto 0 auto auto;
        color: #afabab;
        
    `;   

function Dropdown({selected, setSelected}){
    const [isActive, setIsActive] = useState(false);
    const options = {'10대':10 ,'20대': 20, '30대':30,'40대':40,'50대':50,'60대 이상':60};


    return(
    <div className="dropdown"> 
        <div className="dropdown-btn" onClick={(e)=>
        setIsActive(!isActive)}>
            {`${!selected ? '선택' : selected + '대'}`}{isActive?<TriangleUpIcon/>:<TriangleDownIcon/>}
        </div>
        {isActive && (
        <div className="dropdown-content">
            {Object.keys(options).map((key,index)=>(
                <div onClick={(e)=>{
                    setSelected(options[key]);
                    setIsActive(false);
                }}
                className="dropdown-item">
                    {key}
                </div>
            ))}
        </div>
        )}
    </div>
    );
 
}

export default Dropdown;