import React from "react";
import styled from 'styled-components';

const Allbars = styled.div`
       width: 100%;
       height:100%;
       position:absolute;
       display:flex;
       top:82%;
       justify-content: center;
       z-index:200;
`;
const Bar = styled.span`
       cursor: pointer;
       height:4px;
       width: 198px;
       margin: 0px 3px;
       background-color : rgba(255,255,255,1);
       display: inline-block;
`;
const ActiveBar = styled.span`
       cursor: pointer;
       height:4px;
       width: 198px;
       margin: 0px 3px;
       display: inline-block;
       background-color : #FF88AD ;
`;

function Bars ({ activeIndex, onclick, data}) {
return (
 <Allbars>
        { 
        data.map((slide, index) => (
       /* <span  key={index} className={`${activeIndex === index ? <ActiveBar /> : <Bars/>}`}
        onClick={() => onclick(index)}>
        </span> */
        activeIndex === index ? <ActiveBar onClick={() => onclick(index)}/> : <Bar onClick={() => onclick(index)}/>
        ))}
 </Allbars>
);
}
export default Bars;
