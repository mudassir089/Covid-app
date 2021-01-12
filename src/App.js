import React, { useState } from "react";
import "./App.css";
function App() {
  const [country, setCountry] = useState("");
  const [details, setDetails] = useState({});

  const dataUrl = `https://corona.lmao.ninja/v2/countries/${country}`;

  const searchData = async (e) => {
    e.preventDefault();
    if (country !== "") {
      await fetch(dataUrl)
        .then((res) => res.json())
        .then((data) => setDetails(data))
        .catch((err) => console.log(err));
    }

    setCountry("");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={searchData}>
        <label htmlFor="country" className="label">
          Search Countries
        </label>
        <input
          type="text"
          name="country"
          className="input"
          onChange={(e) => setCountry(e.target.value)}
          value={country}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="display">
        <h3>
          Country Name: <span>{details.country}</span>
        </h3>

        <h3>
          Total Confirmed Cases: <span>{details.cases}</span>
        </h3>
        <h3>
          Total Deaths: <span>{details.deaths}</span>
        </h3>
        <h3>
          Total Recovered: <span>{details.recovered}</span>
        </h3>
        <h3>
          Cases Reported Today: <span>{details.todayCases}</span>
        </h3>
        <h3>
          Critical Cases Reported: <span>{details.critical}</span>
        </h3>
      </div>
    </div>
  );
}

export default App;
