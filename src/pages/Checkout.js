import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import Paypal from '../components/paypal';

function Checkout() {
  const { user } = useContext(AuthContext);
  const coursePrice = "49.99";

  return (
    <div className="checkout">
      <h2>Complete Your Course Purchase</h2>
      <p>Welcome, {user.email}</p>
      <p>Course Price: ${coursePrice}</p>
      <Paypal amount={coursePrice} />
    </div>
  );
}

export default Checkout;