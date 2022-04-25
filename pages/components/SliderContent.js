import React from "react";
import Card from "./card";
import styled from 'styled-components';

const Active = styled.div`
	position: relative;
	display: inline-block;
`;
const Inactive = styled.div`
	display:none;
`;

function SliderContent ({activeIndex, data}) {
	return (

		<section>
			{data.map((slider, index)=>(
				/*<div
					key={index}
					className={index === activeIndex ? styles.active : styles.inactive}
				>
					<Card data={slider}/>
				</div>*/
				index === activeIndex ? <Active><Card data={slider}/></Active> : <Inactive><Card data={slider}/></Inactive>
			))}
		</section>
);

}

export default SliderContent;