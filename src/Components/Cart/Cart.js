import React from "react";
import './Cart.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const cart = useSelector((state) => state.shopcart.cart);
  const navigate = useNavigate();

  console.log(cart);

  return (
    <div className="cart-container">
      <div>
        <div>
        <button
          className="cart-button"
          // onClick={() => dispatch(setSelectedProduct(null))}
          onClick={() => navigate("/products")}
        >
          Back to Products page
        </button>
        </div>
        <div>
        <button
          className="cart-button-checkout"
          // onClick={() => dispatch(setSelectedProduct(null))}
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
        </div>
        <div>
          <h3><b>Total price:</b> <span>
            {
              cart.map(product => product.price).reduce((prev, curr) => prev + curr, 0)
            }
            </span> $</h3>
        </div>
      </div>
      <div className="innercontainer">
        
           {cart.map((product, id) => {
            return (
          <div className="cartproduct" key={id}>
            <div className="cartimagecontainer">
              <img className="cartimage" src={product.thumbnail} />
            </div>
            
            <p>{product.title}</p> <br />
            <p>{product.price}</p>
          </div>
            )}

            )}
      </div>
    </div>
  );
}
