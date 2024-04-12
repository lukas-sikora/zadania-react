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
        <div style={{ marginBottom: "20px" }}>
          <img style={{ width: "100%" }} />
          <p>Title:</p>
        </div>
      </div>
    </>
  );
};
export default PhotoBrowserApp;
