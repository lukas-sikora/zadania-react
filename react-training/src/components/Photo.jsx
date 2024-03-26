const Photo = ({ photo }) => {
  return (
    <div className="photo">
      <h2>{photo.title}</h2>
      <img src={photo.imageUrl} alt={photo.title} />
    </div>
  );
};
export default Photo;
