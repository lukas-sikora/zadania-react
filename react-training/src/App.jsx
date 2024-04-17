import { useState } from "react";

import { CountryStatistics } from "./components/CountryStatistics";

const countries = [
  { name: "Polska", population: 38000000, area: 312696 },
  { name: "Niemcy", population: 83000000, area: 357022 },
  { name: "Francja", population: 67000000, area: 640679 },
];

const App = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  return (
    <>
      <h1>Statystyki krajów:</h1>
      <select
        onChange={(e) =>
          setSelectedCountry(
            countries.find(({ name }) => name === e.target.value)
          )
        }
      >
        {countries.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <CountryStatistics country={selectedCountry} />
    </>
  );
};

export default App;
