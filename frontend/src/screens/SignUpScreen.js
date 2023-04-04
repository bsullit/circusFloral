import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import { Store } from '../Store';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import Button from 'react-bootstrap/esm/Button';
import { getError } from '../utils';

export default function SignUpScreen() {
  const navigate = useNavigate();
  const search = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { userInfo } = state;

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        'api/users/signup',
        {
          name,
          email,
          password,
        },
        ctxDispatch({ type: 'USER_SIGNIN', payload: data })
      );
    } catch (err) {
      toast.error(getError(err));
    }
  };

  // useEffect(()=>{

  // })
  return (
    <Container>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      <h1>Sign Up</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm password</Form.Label>
          <Form.Control value={confirmPassword} />
          onChange=
          {(e) => {
            setConfirmPassword(e.target.value);
          }}
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>
        <div className="mb-3">
          Already have an account?{''}
          <Link to={`signin?redirect=${redirect}`}></Link>
        </div>
      </Form>
    </Container>
  );
}
