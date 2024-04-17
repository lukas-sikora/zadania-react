const CountryStatistics = ({ country }) => {
  console.log("Wywoływanie komponentu CountryStatistics");

  const density = country.population / country.area;

  return (
    <h2>
      {country.name} - gęstość zaludnienia: {density} osób/km²
    </h2>
  );
};
export default CountryStatistics;
