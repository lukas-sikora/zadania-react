import styles from "./photo.module.css";

const Photo = ({ photo }) => {
  return (
    <div className={styles.photo}>
      <h2>{photo.title}</h2>
      <img src={photo.imageUrl} alt={photo.title} />
    </div>
  );
};
export default Photo;
