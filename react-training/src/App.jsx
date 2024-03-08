import BookDescription from "./components/BookDescription";

const books = [
  {
    title: "W pustyni i w puszczy",
    description:
      "Opis: To fascynująca opowieść o przygodach dwójki dzieci, które muszą przetrwać w trudnych warunkach afrykańskiej dziczy.",
  },
  {
    title: "Lalka",
    description:
      "Opis: Klasyczna powieść przedstawiająca społeczne i osobiste dramaty w burzliwym okresie zaborów.",
  },
  {
    title: "Pan Tadeusz",
    description:
      "Opis: Epopeja narodowa opowiadająca o życiu polskiej szlachty na Litwie w okresie przed powstaniem listopadowym.",
  },
];

const App = () => {
  return (
    <div>
      <h1>Księgozbiór</h1>
      <BookDescription
        bookTitle={books[0].title}
        bookDescription={books[0].description}
      />
      <BookDescription
        bookTitle={books[1].title}
        bookDescription={books[1].description}
      />
      <BookDescription
        bookTitle={books[2].title}
        bookDescription={books[2].description}
      />
    </div>
  );
};

export default App;
