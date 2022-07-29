import React from 'react'
import { useNavigate } from 'react-router-dom'

const Checkout = () => {

    const navigate = useNavigate();

  return (
    <div>
        <div>
        <div>
        <button
          className="checkout-button"
          // onClick={() => dispatch(setSelectedProduct(null))}
          onClick={() => navigate("/products")}
        >
          Back to Products page
        </button>
        </div>
        </div>
        <div>
            <textarea placeholder="Enter your address"></textarea>
        </div>

        <div>
        <button
          className="order-button"
          // onClick={() => dispatch(setSelectedProduct(null))}
        //   onClick={() => navigate("/products")}
        >
          Place Order
        </button>
        </div>

    </div>
  )
}

export default Checkout