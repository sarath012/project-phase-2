import React, { useContext, useState } from "react";
import "./Card.css";
// import { appContext } from '../../Context/AppContext';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "../../Store/shopcartSlice";

export default function Card({ product }) {
  // const navigate = useNavigate()
  const dispatch = useDispatch();
  // const {selectedProduct, setSelectedProduct} = useContext(appContext)

  return (
    <div
      className="cardcontainer"
      key={product.id}
      onClick={() => dispatch(setSelectedProduct(product))}
    >
      <div>
        <img className="thumbimg" src={product.thumbnail} />
      </div>

      <div className="titlecontainer">
        <h4 className="titleheading">{product.title}</h4>
        <p className="categorytext">{product.category}</p>
      </div>

      <div className="textcontainer">
        <div className="price">
          <p>
            <b>{product.price}$</b>
          </p>
        </div>
        <div className="rating">
          <p>
            <b>Rating: </b>
            {product.rating}
          </p>
          <p>
            <b>discount </b>
            {product.discountPercentage}%
          </p>
        </div>
      </div>
    </div>
  );
}
