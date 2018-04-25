import React from "react";
import FontAwesome from 'react-fontawesome';


const Form = props => (
	<form onSubmit={props.getMeteo}>
			  <FontAwesome name="building" size="2x"/><input type="text" name="ville" placeholder="Recherchez une ville..."/>
			  <FontAwesome name="globe" size="2x"/><input type="text" name="pays" placeholder="...puis son pays..."/>
			  <button>Obtenir la météo</button>
			</form>
);


export default Form;