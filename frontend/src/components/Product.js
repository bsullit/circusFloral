import { Link } from 'react-router-dom';

function Product(props) {
  const { product } = props;

  return (
    <div className="product" key={product.slug}>
      <Link to={`/product/${product.slug}`}>
        <img src={product.image} alt={product.name} />
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.slug}`}>
          <p>{product.name}</p>
        </Link>
        <strong>{product.price}</strong>
        <button>Add to cart </button>
      </div>
    </div>
  );
}
export default Product;
