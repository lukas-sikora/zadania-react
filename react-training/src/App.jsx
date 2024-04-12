import { useCalculateYearsSince } from "./hooks/useCalculateYearsSince";

const eventData = {
  eventName: "Rocznica założenia firmy",
  eventDate: "2000-01-01",
};

const App = () => {
  const yearsSince = useCalculateYearsSince(eventData.eventDate);

  return (
    <h2>
      {eventData.eventName}, minęło lat: {yearsSince}
    </h2>
  );
};

export default App;
