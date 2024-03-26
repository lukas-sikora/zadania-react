import { useState } from "react";
import styles from "./productCard.module.css";

const ProductCard = () => {
  const [selectedSize, setSelectedSize] = useState("M");

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  return (
    <div className={styles.card}>
      <h1 className={styles.title}>T-shirt "React"</h1>
      <div>
        <img
          src="https://pngimg.com/uploads/tshirt/tshirt_PNG5454.png"
          alt="T-shirt React"
          className={styles[`img--${selectedSize}`]}
        />
      </div>
      <select onChange={handleSizeChange} value={selectedSize}>
        <option value="S">Small</option>
        <option value="M">Medium</option>
        <option value="L">Large</option>
      </select>
    </div>
  );
};
export default ProductCard;
