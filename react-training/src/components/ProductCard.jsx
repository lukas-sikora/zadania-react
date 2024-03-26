import styles from "./productCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <h1 className={styles.title}>T-shirt "React"</h1>
      <img
        src="https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png"
        alt="T-shirt React"
        className={"/* Jak zmienić klasę w zależności od rozmiaru? */"}
      />
      <select>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>
    </div>
  );
};
export default ProductCard;
