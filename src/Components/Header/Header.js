import React from "react";

import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { setTitleFilter,setSortArray } from "../../Store/shopcartSlice";
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
  
  const cart = useSelector((state) => state.shopcart.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  return (
    <div className="head">
      <div className="heading-container">
        <h1 className="heading">Shopping cart</h1>
      </div>

      <div>
        <div>
          <input
            type="text"
            placeholder="Search by name"
            onChange={(e) => dispatch(setTitleFilter(e.target.value))}
          />
        </div>

        <div>
          <select onChange={(e) => dispatch(setSortArray(e.target.value))}>
            <option value="none" defaultValue disabled>
              none
            </option>
            <option value="price">Price Ascending</option>
            <option value="rating">Rating Ascending</option>
            <option value="discountPercentage">Discount Percentage</option>
          </select>
        </div>

        <div>
        <button
          className="addproduct-button"
          // onClick={() => dispatch(setSelectedProduct(null))}
          onClick={() => navigate("/addproduct")}
        >
          Add Product
        </button>
        </div>

        <div className="cartcontainer">
          <button type="button" class="btn btn-default" onClick={()=>navigate('/cart')}>
            <span class="glyphicon glyphicon-shopping-cart"></span> Cart
            <span>  ({cart.length})</span>
          </button>
        </div>
      </div>
    </div>
  );
}
