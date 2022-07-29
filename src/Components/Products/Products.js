import React, { useEffect } from "react";
// import data from "../../Object/products.json";
import Aside from "../Aside/Aside";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Products.css";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "../../Store/shopcartSlice";

export default function Products() {
  const sortArray = useSelector((state) => state.shopcart.sortArray);
  const titleFilter = useSelector((state) => state.shopcart.titleFilter);
  const filter = useSelector((state) => state.shopcart.filter);
  const isLoggedIn = useSelector((state) => state.shopcart.isLoggedIn);
  const data = useSelector((state) => state.shopcart.data);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    } else {
      axios.get("https://dummyjson.com/products").then((response) => {
        dispatch(setData(response.data));
      });
    }
  }, []);

  const compare = (a, b) => {
    if (sortArray === "none") {
      return 0;
    }
    return a[sortArray] - b[sortArray];
  };

  if (data === null) {
    return <div>Loading....</div>;
  }

  return (
    <div className="product-parent-container">
      <Header data={data} />
      <Aside />

      <div className="productcontainer">
        {data.products
          .slice()
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
            <Card product={product} />
          ))}
      </div>
    </div>
  );
}
