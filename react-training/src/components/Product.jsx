const Product = ({ name, imgSrc, width }) => (
  <div>
    <h3>{name}</h3>
    <img src={imgSrc} alt={name} width={width} />
  </div>
);

export default Product;
