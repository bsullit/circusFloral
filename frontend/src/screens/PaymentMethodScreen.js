import { useContext, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';
import Form from 'react-bootstrap/Form';

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

  const submitHandler = (e) => {};

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
          </div>
        </Form>
      </div>
    </div>
  );
}
