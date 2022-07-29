import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";


export default function Card({ product }) {

  const navigate = useNavigate();

  return (
    <div
      className="cardcontainer"
      onClick={() => navigate(`/products/${product.id}`)}
    >
      <div>
        <img className="thumbimg" alt={product.title} src={product.thumbnail} />
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
