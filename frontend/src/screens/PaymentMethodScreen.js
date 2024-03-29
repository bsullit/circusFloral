import { useContext, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;
  //setting payment method on state default to paypal
  const [paymentMethodName, setPaymentMethodName] = useState(
    paymentMethod || 'Paypal'
  );

  useEffect(() => {
    // if (!shippingAddress.address) {
    //   navigate('/shipping');
    // }
  }, [shippingAddress, navigate]);
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: paymentMethodName });
    localStorage.setItem('paymentMethod', paymentMethodName);
    navigate('/placeorder');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3 />
      <div>
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="mb-3">Payment Method</h1>
        <Form>
          <div className="mb-3">
            <Form.Check
              type="radio"
              id="Paypal"
              label="Paypal"
              value="Paypal"
              checked={paymentMethodName === 'Paypal'}
              onChange={(e) => {
                submitHandler(e.target.value);
              }}
            />
          </div>
          <div>
            <Form.Check
              type="radio"
              id="Stripe"
              label="Stripe"
              value="Paypal"
              checked={paymentMethodName === 'Paypal'}
              onChange={(e) => {
                submitHandler(e.target.value);
              }}
            />
            <div>
              <Button className="mb-3" type="submit">
                Continue
              </Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
