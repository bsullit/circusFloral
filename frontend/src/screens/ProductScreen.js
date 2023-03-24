import { useParams } from 'react-router-dom';
import { useReducer, useEffect } from 'react';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Listgroup from 'react-bootstrap/ListGroup';
import Rating from '../components/Rating';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, product: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

function ProductScreen() {
  const params = useParams();
  const { slug } = params;

  const [{ product, loading, error }, dispatch] = useReducer(reducer, {
    product: [],
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get(`/api/products/slug/${slug}`);
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, [slug]);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Row>
        <Col md={6}>
          <img
            className="img-large"
            src={product.image}
            alt={product.name}
          ></img>
        </Col>
        <Col md={3}>
          <Listgroup variant="flush">
            <Listgroup.Item>
              <h1>{product.name}</h1>
            </Listgroup.Item>
            <Listgroup.Item>
              <Rating
                rating={product.rating}
                numReviews={product.numReviews}
              ></Rating>
            </Listgroup.Item>
            <Listgroup.Item>Price: ${product.price}</Listgroup.Item>
            <Listgroup.Item>
              <Row>
                <Col>Status:</Col>
                <Col>
                  {product.countInStock > 0 ? (
                    <Badge bg="success">In Stock</Badge>
                  ) : (
                    <Badge bg="danger">Out of stock</Badge>
                  )}
                </Col>
              </Row>
            </Listgroup.Item>
            {product.countInStock > 0 && (
              <Listgroup.Item>
                <div className="d-grid"></div>
                <Button variant="primary">Add to cart</Button>
              </Listgroup.Item>
            )}
            <Listgroup.Item>
              Description:
              <p>{product.description}</p>
            </Listgroup.Item>
          </Listgroup>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
