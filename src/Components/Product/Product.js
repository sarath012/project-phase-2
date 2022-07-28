import React, { useContext } from "react";
import { appContext } from "../../Context/AppContext";
import "./Product.css";
import Imagecarousel from "./Imagecarousel/Imagecarousel";
import { useParams } from "react-router-dom";
// import data from '../../Object/products.json'
import { useSelector, useDispatch } from "react-redux";
import { setSelectedProduct, setCart } from "../../Store/shopcartSlice";

export default function Product() {
  const selectedProduct = useSelector((state) => state.shopcart.selectedProduct);
  const cart = useSelector((state) => state.shopcart.cart);

  const dispatch = useDispatch();

  // const {selectedProduct, setSelectedProduct,cart,setCart} = useContext(appContext);

  // console.log(selectedProduct.id);
  const addToCart = (selectedProduct) => {
    dispatch(setCart([...cart, selectedProduct]));
  };

  console.log(cart);
  return (
    <div>
      <div className="product-button-container">
        <button
          className="product-button"
          onClick={() => dispatch(setSelectedProduct(null))}
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
