import "./App.css";
import React, { useState } from "react";

function App() {
  const [addressObj, setAddressObj] = useState({});

  const address = [
    addressObj.city,
    addressObj.state,
    addressObj.country,
    addressObj.zip,
  ]
    .filter(Boolean)
    .join(", ");

  const apiKey = process.env.REACT_APP_API_KEY;

  const geoFinder = async (lat, lon) => {
    try {
      const response = await fetch(
        `https://api.geocod.io/v1.7/reverse?q=${lat},${lon}&api_key=${apiKey}`
      );
      const data = await response.json();
      setAddressObj({
        city: data.results[0].address_components.city,
        state: data.results[0].address_components.state,
        country: data.results[0].address_components.country,
        zip: data.results[0].address_components.zip,
      });
    } catch (error) {
      console.error("Error fetching address:", error);
    }
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      geoFinder(position.coords.latitude, position.coords.longitude);
    });
  };

  return (
    <div className="App">
      <button onClick={getLocation}>Get Location</button>
      <h2>{address}</h2>
    </div>
  );
}

export default App;
