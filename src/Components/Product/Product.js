import React, { useEffect, useState } from "react";
import "./Product.css";
import Imagecarousel from "./Imagecarousel/Imagecarousel";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCart } from "../../Store/shopcartSlice";

export default function Product() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = useSelector((state) => state.shopcart.data);
  const cart = useSelector((state) => state.shopcart.cart);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const { productid } = useParams();
  // console.log(productid);

  useEffect(() => {
    let productdata = data.products.find(
      (product) => product.id === parseInt(productid)
    );
    setSelectedProduct(productdata);
  }, []);

  const addToCart = (selectedProduct) => {
    dispatch(setCart([...cart, selectedProduct]));
  };

  if (selectedProduct === null) {
    return <div>Loading...</div>;
  }

  console.log(cart);
  return (
    <div>
      <div className="product-button-container">
        <button
          className="product-button"
          // onClick={() => dispatch(setSelectedProduct(null))}
          onClick={() => navigate("/products")}
        >
          Back to Products page
        </button>
      </div>
      <div className="product-details-container">
        <div className="image-details-container">
          <Imagecarousel image={selectedProduct.images} />
        </div>
        <div className="text-details-container">
          <div>
            <h1>{selectedProduct.title}</h1>
            <p>{selectedProduct.description}</p>
          </div>
          <div>
            <p>{selectedProduct.stock}</p>
          </div>
          <div>
            <h3>{selectedProduct.price}$</h3>
          </div>
          <div>
            <button onClick={() => addToCart(selectedProduct)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
