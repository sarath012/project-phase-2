import React, { useState, useEffect } from "react";
// import data from "../../Object/products.json";
import Aside from "../Aside/Aside";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Products.css";

import axios from "axios";
import Product from "../Product/Product";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setData } from "../../Store/shopcartSlice";

export default function Products() {

  const selectedProduct = useSelector((state) => state.shopcart.selectedProduct);
  const sortArray = useSelector((state) => state.shopcart.sortArray);
  const titleFilter = useSelector((state) => state.shopcart.titleFilter);
  const filter = useSelector((state) => state.shopcart.filter);
  const isLoggedIn = useSelector((state) => state.shopcart.isLoggedIn);
  const data = useSelector((state) => state.shopcart.data);

  const dispatch = useDispatch();

  // const [selectProducts, setSelectProducts] = useState({});
  // const [data, setData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if(!isLoggedIn){
      navigate('/')
    }
    else{
      axios.get("https://dummyjson.com/products")
      .then((response) => {
        dispatch(setData(response.data));
      });
    }
  }, []);

  

  

  // const {
  //   selectedProduct,
  //   // setSelectedProduct,
  //   sortArray,
  //   // setSortArray,
  //   titleFilter,
  //   // setTitleFilter
  //   filter,
  // } = useContext(appContext);

  const compare = (a, b) => {
    if (sortArray === "none") {
      return 0;
    }
    return a[sortArray] - b[sortArray];
  };



  if (data===null){
    return <div>Loading....</div>
  }
  if (selectedProduct !== null) {
    return <Product />;
    // navigate();
  }

  return (
    <div className="product-parent-container">
      <Header data={data} />
      <Aside />

      <div className="productcontainer">
        {data.products.slice()
          .sort(compare)
          .filter((product) =>
            product.title.toLowerCase().includes(titleFilter)
          )
          .filter((product) =>
            filter.brand.length > 0
              ? filter.brand.includes(product.brand)
              : product
          )
          .filter((product) =>
            filter.category.length > 0
              ? filter.category.includes(product.category)
              : product
          )
          .filter((product) => (!filter.stock ? product.stock === 0 : product))
          .map((product) => (
            <Card product={product}  />
          ))}
      </div>
    </div>
  );
}
