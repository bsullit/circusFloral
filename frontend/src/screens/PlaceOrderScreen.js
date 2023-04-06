import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
export default function PlaceOrderScreen() {
  const navigate = useNavigate();
  //   const { state, dispatch: ctxDispatch } = useContext();
  //   const { cart, userInfo } = state;
  return (
    <div>
      <CheckoutSteps step1 step2 step3 step4 />
      <Helmet>
        <title>Place Order</title>
      </Helmet>
      <h1>Preview Order</h1>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Shipping</Card.Title>
              <Card.Text>
                <strong>Name</strong>
                {/* {cart.shippingAddress.fullName} */}
                <br />
                <strong>Address</strong>
                {/* {cart.shippingAddress.address}
                {cart.shippingAddress.city}
                {cart.shippingAddress.postal}
                {cart.shippingAddress.country} */}
              </Card.Text>
              <Link to={'/shipping'}>Edit</Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
