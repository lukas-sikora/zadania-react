const PhotoBrowserApp = () => {
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
        Zdjęcia
      </div>
    </>
  );
};
export default PhotoBrowserApp;
