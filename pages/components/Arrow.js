import React from "react";
import styled from 'styled-components';

const Prev = styled.span`
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top:50%;
    color:#FF88AD;
    width: auto;
    padding: 1rem;
    font-size: 40px;
    font-weight: bold;
    left:1%;
    border-radius: 5px 0px 0px 5px;
`;

const Nex = styled.span`
    cursor: pointer;
    z-index: 100;
    position: absolute;
    top:50%;
    color:#FF88AD;
    width: auto;
    padding: 1rem;
    font-size: 40px;
    font-weight: bold;
    right:1%;
    border-radius: 5px 0px 0px 5px;
`;

const Wrapper = styled.div`
  &:hover .button {
        color:rgb(253, 252, 252);
        background-color : rgba(0,0,0,0.6);
        transition : all 0.5s ease-in;
  }
`;
function Arrows ({ prevSlide, nextSlide}) {
    return(
    <div>
        <Wrapper>
        <Prev onClick={prevSlide} className="button">
            &#10094;
        </Prev>
        </Wrapper>
        <Wrapper>
        <Nex className="button" onClick={nextSlide}>
            &#10095;
        </Nex>
        </Wrapper>
    </div>
    );
}

export default Arrows;