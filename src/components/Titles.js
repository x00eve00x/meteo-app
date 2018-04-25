import React from "react";
import FontAwesome from 'react-fontawesome';

const Titles = () => (
	<div>
		<h1 className="title-container__title"><FontAwesome name="sun" size="1.5x"/>, <FontAwesome name="cloud" size="1.5x"/>, <FontAwesome name="tint" size="1.5"/> ou <FontAwesome name="bolt" size="1.5x"/> ?</h1>
		 <p className="title-container__subtitle">Obtenez des informations sur la température, les conditions et plus...</p>
	</div>
);


export default Titles;