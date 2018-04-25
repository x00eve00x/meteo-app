import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Meteo from "./components/Meteo";

const API_KEY = "724f9f2a9eb33b694fdefa62b8b62407";

class App extends React.Component {
  /* STATE =
 - an object that lives within a component
 - is reponsible for keeping track of changing data
   inside the component. This change can be the result
   of the user interaction (ex. a user clicking a 
   button or submitting a form), but usually it's 
   simply some interaction with the application that
   cause the data to change.
 */
  state = {
    // this is the initial state of the object:  
    // (It's only going to change once we press the button)
    temperature: undefined,
    ville: undefined,
    pays: undefined,
    humidite: undefined,
    description: undefined,
    error: undefined
  }

  getMeteo = async (e /*=event object*/) => {
    e.preventDefault(); //this is going to prevent the default behavior of this component when we press the button
    const ville = e.target.elements.ville.value;
    const pays = e.target.elements.pays.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville},${pays}&units=metric&lang=fr&appid=${API_KEY}`);
    const data = await api_call.json();
    
    
    if (ville && pays) {
    // setState is built-in method in react, that prevents use you to directly manipulate the state.
    this.setState({
      ville: data.name,
      pays: data.sys.country,
      temperature: data.main.temp,
      humidite: data.main.humidity,
      condition: data.weather[0].description,
      error: ""
    });
  } else {
    this.setState({
      ville: undefined,
      pays: undefined,
      temperature: undefined,
      humidite: undefined,
      condition: undefined,
      error: "Veuillez inscrire le nom de ville ainsi que son pays."
    });
  }
}
    
  render() {
    return (
      // ** You can only return one parent element (you can't return another div or paragraph)
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
              </div>
                <div className="col-xs-7 form-container">
                <Form getMeteo={this.getMeteo}/>
                <Meteo
                  ville={this.state.ville}
                  pays={this.state.pays}
                  temperature={this.state.temperature}
                  humidite={this.state.humidite}
                  condition={this.state.condition}
                  error={this.state.error}
                />
            </div>
          </div>
        </div>    
      </div>
    </div>    
  </div>

    );
  }
};

        
export default App;