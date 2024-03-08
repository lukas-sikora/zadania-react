const ProductDetails = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h4>
        Cena: {product.price}
        {product.isOnSale && <span className="sale"> Wyprzedaż!</span>}
      </h4>
    </div>
  );
};
export default ProductDetails;
