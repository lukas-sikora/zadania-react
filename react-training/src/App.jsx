import { useState } from "react";

const App = () => {
  const [image, setImage] = useState("");

  const handleButtonClick = (timeOfDay) => {
    switch (timeOfDay) {
      case "morning":
        setImage(
          "https://solarspot.com.pl/wp-content/uploads/2021/07/slonce-ciekawostki-scaled-e1645095185767-1024x577.jpg"
        );
        break;
      case "afternoon":
        setImage(
          "https://crn.pl/wp-content/uploads/media/default/0001/03/8e44fbb597ed00b9aa7e8e09c1b9b35b95661f49.jpg"
        );
        break;
      case "evening":
        setImage(
          "https://bi.im-g.pl/im/dc/3b/19/z26459868AMP,Niebieski-Ksiezyc---co-oznacza-niebieski-Ksiezyc-.jpg"
        );
        break;
      default:
        setImage("");
    }
  };

  return (
    <>
      <>
        <h1>Wybierz porę dnia:</h1>
        <button onClick={() => handleButtonClick("morning")}>Rano</button>
        <button onClick={() => handleButtonClick("afternoon")}>
          Popołudnie
        </button>
        <button onClick={() => handleButtonClick("evening")}>Wieczór</button>
        <div id="image">
          {image && (
            <img
              src={image}
              alt="Obrazek reprezentujący porę dnia"
              width={400}
            />
          )}
        </div>
      </>
    </>
  );
};

export default App;
