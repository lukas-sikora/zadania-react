import ReactDOM from "react-dom/client";
import "./index.css";

const element = (
  <div>
    <div>
      <h3>Książka</h3>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXCpiYKfm11YUjU715AE4xto0XO6fzBiL8Q&usqp=CAU"
        alt="Książka"
        width={200}
      />
    </div>
    <div>
      <h3>Gra planszowa</h3>
      <img
        src="https://files.rebel.pl/products/100/303/_399/eurobiznes-gra-2000x2000-k-ffffff.jpg"
        alt="Gra planszowa"
        width={200}
      />
    </div>
    <div>
      <h3>Laptop</h3>
      <img
        src="https://media.istockphoto.com/id/479520746/pl/zdj%C4%99cie/laptop-z-pustego-ekranu-na-bia%C5%82ym-tle.jpg?s=612x612&w=0&k=20&c=fgAZLyC9-05n7vWqTHjN1FARiPp9KXIfcufK6kxv1Ms="
        alt="Laptop"
        width={200}
      />
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(element);
