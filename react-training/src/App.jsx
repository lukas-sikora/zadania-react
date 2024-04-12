const eventData = {
  eventName: "Rocznica założenia firmy",
  eventDate: "2000-01-01",
};

const App = () => {
  return (
    <h2>
      {eventData.eventName}, minęło lat: {eventData.eventDate}
    </h2>
  );
};
export default App;
