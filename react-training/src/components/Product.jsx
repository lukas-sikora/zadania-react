const Product = ({ name, imgSrc, width }) => (
  <div>
    <h3>{name}</h3>
    <img src={imgSrc} alt={name} width={width} />
  </div>
);

Product.defaultProps = {
  name: "Produkt bez nazwy",
  imgSrc:
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=",
  width: 150,
};

export default Product;
