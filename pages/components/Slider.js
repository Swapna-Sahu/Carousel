import React, { useState } from "react" ;
import SliderContent from "./SliderContent";
import Bars from "./Bars.js" ;
import Arrows from "./Arrow.js";
import data from "../../public/data.json";
import styled from 'styled-components';

const SliderContainer = styled.div`
	position:relative;
	margin:auto;
	overflow:hidden;
`;

const len = data.length - 1;
 
function Slider(props) {
    const [activeIndex, setActiveIndex] = useState(0);

    console.log("data",data );

return (
	<SliderContainer >
	<SliderContent  activeIndex= {activeIndex}  data={data}/>
	<Arrows 
		prevSlide = {() =>  setActiveIndex(activeIndex < 1 ? len : activeIndex  -1 )
			}
		nextSlide = {() =>  setActiveIndex(activeIndex < len ? activeIndex + 1 : 0 )
			}	/>

	<Bars 
		activeIndex={activeIndex}
		data={data}
		onclick={(activeIndex) => setActiveIndex(activeIndex)}
	/>
</SliderContainer>
);
}
export default Slider;