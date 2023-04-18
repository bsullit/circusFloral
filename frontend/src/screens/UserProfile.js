import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import ListGroup from 'react-bootstrap/ListGroup';
export default function UserProfile() {
  const navigate = useNavigate();

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;
  return (
    <div>
      <Helmet>User Profile</Helmet>
      <h1>User Profile</h1>

      <div>Email {state.cart.userInfo.email} </div>
      <div>
        Shipping Address
        <ListGroup>
          <ListGroup.Item>
            {/* address: {state.cart.shippingAddress.address} */}
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div></div>
    </div>
  );
}
