import React from "react";
import FontAwesome from 'react-fontawesome';

//Stateless functional component:
const Meteo = props => (
	<div className="meteo__info">
		{/*we will use conditional operators to make the categories
			 titles appear only once we click the button */}
        { 
          props.ville && props.pays && <p className="meteo__key">Localisation: 
            <span className="meteo__valeur"> {props.ville}, {props.pays}</span>
          </p>
        }
		{ 
		  props.temperature && <p className="meteo__key">Température: 
		    <span className="meteo__valeur"> {props.temperature} °C</span>
		  </p> 
		}
		{ 
		  props.humidite && <p className="meteo__key">Humidité:
		    <span className="meteo__valeur"> {props.humidite}</span>
		  </p> 
		}
		{
		  props.condition && <p className="meteo__key">Conditions: 
		    <span className="meteo__valeur"> {props.condition}</span>
		  </p> 
		}
		{ 
		 props.error && <p className="meteo__erreur"><FontAwesome name="exclamation-triangle" size="1.5x"/>{ props.error }</p> 
		}
	</div>
);
	


export default Meteo;
