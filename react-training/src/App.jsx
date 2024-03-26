import { useState } from "react";

const cities = [
  { id: 1, name: "Kraków", country: "Polska" },
  { id: 2, name: "Paryż", country: "Francja" },
  { id: 3, name: "Madryt", country: "Hiszpania" },
  { id: 4, name: "Berlin", country: "Niemcy" },
  { id: 5, name: "Rzym", country: "Włochy" },
];

const App = () => {
  const [selectedCityId, setSelectedCityId] = useState(cities[0].id);

  const handleChange = (event) => {
    setSelectedCityId(Number(event.target.value));
  };

  const selectedCityInfo = cities.find((city) => city.id === selectedCityId);

  return (
    <div>
      <h1>Wybierz miasto:</h1>
      <select value={selectedCityId} onChange={handleChange}>
        {cities.map(({ id, name }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <p>
        Wybrałeś: {selectedCityInfo.name}, {selectedCityInfo.country}
      </p>
    </div>
  );
};
export default App;
