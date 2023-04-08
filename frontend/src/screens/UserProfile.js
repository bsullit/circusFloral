import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
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
      <div>email: {state.userInfo.email}</div>
      <div></div>
    </div>
  );
}
