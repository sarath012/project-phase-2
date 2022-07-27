import React, { useContext, useState, useEffect } from "react";
import data from "../../Object/products.json";
import Aside from "../Aside/Aside";
import Card from "../Card/Card";
import Header from "../Header/Header";
import "./Products.css";
import { appContext } from "../../Context/AppContext";
import Product from "../Product/Product";

export default function Products() {
  // const [selectProducts, setSelectProducts] = useState({});
  const {
    selectedProduct,
    // setSelectedProduct,
    sortArray,
    // setSortArray,
    titleFilter,
    // setTitleFilter
    filter
  } = useContext(appContext);

  const compare = (a, b) => {
    if (sortArray === "none") {
      return 0;
    }
    return a[sortArray] - b[sortArray];
  };

  console.log(titleFilter);

  if (selectedProduct !== null) {
    return <Product />;
  }

  return (
    <div className="product-parent-container">
      <Header data={data} />
      <Aside />

      <div className="productcontainer">
        {data.products
          .sort(compare)
          .filter((product) =>
            product.title.toLowerCase().includes(titleFilter)
          )
          .filter((product) => filter.brand.length>0 ? filter.brand.includes(product.brand) : product)
          .filter((product) => filter.category.length>0 ? filter.category.includes(product.category) : product)
          .filter((product) => !(filter.stock) ? product.stock===0 : product)
          .map((product) => (
            <Card product={product} />
          ))}
      </div>
    </div>
  );
}
