import { useState } from "react";

const App = () => {
const [image, setImage] = useState("")

const handleButtononClick = (timeOfDay)=>{
  switch (timeOfDay) {
    case "morning": setImage("https://centaurus.org.pl/wp-content/uploads/2024/05/blog_slonce.jpg");      
      break;
    case "afternoon": setImage("https://radarburz.pl/wp/wp-content/uploads/2022/08/chmury-1024x682.jpeg");
    break;
    case "evening": setImage("https://cdn.podroze.smcloud.net/t/photos/t/146019/pelnia-ksiezyca-zdjecie-ilustracyjne_1154347.jpg");
    break;  
    default:setImage("")
      break;
  }
}

  return (
    <>
      <h1>Wybierz porę dnia:</h1>
      <button onClick={()=>handleButtononClick("morning")}>Rano</button>
      <button onClick={()=>handleButtononClick("afternoon")}>Popołudnie</button>
      <button onClick={()=>handleButtononClick("evening")}>Wieczór</button>
      <div id="image">{image && (<img src={image}
      alt="Obrazek reprezentujący porę dnia"
      width={400}  />)}</div>
    </>
  );
};

export default App;
