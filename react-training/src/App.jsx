import Photo from "./components/Photo";
import styles from "./app.module.css";

const photos = [
  {
    id: 1,
    title: "Góry o zachodzie słońca",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeszVlQoq_WStfiieUviyn2RoPlfg1cGYAfN4Pro2B3w&s",
  },
  {
    id: 2,
    title: "Las w pełnym słońcu",
    imageUrl:
      "https://ulala.com.pl/img-preview/aHR0cHM6Ly91bGFsYS5jb20ucGwvaW1nL3dsYXNuZV9mb3RvLzAzMTQ3MDIxXzYzMTEuanBn?&w=625&h=417&e=none&f=none&r=0",
  },
  {
    id: 3,
    title: "Rzeka przepływająca przez dolinę",
    imageUrl:
      "https://img.freepik.com/premium-zdjecie/rzeka-przeplywa-przez-gorska-doline_931576-19842.jpg",
  },
];

const App = () => {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.title}>Galeria zdjęć przyrody</h1>
      <div className={styles.photos}>
        {photos.map((photo) => (
          <Photo key={photo.id} photo={photo} />
        ))}
      </div>
    </div>
  );
};
export default App;
