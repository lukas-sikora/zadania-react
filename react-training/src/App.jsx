import { useState, useEffect } from "react";

const PhotoBrowserApp = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await fetch(
        "https://jsonplaceholder.typicode.com/photos?_limit=20"
      );
      const response = await data.json();
      setPhotos(response);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <p>Ładowanie zdjęć...</p>;
  }

  return (
    <>
      <h1>Galeria zdjęć</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "10px",
        }}
      >
        {photos.map(({ id, url, title }) => (
          <div key={id} style={{ marginBottom: "20px" }}>
            <img src={url} alt={title} style={{ width: "100%" }} />
            <p>Title: {title}</p>
          </div>
        ))}
      </div>
    </>
  );
};
export default PhotoBrowserApp;
