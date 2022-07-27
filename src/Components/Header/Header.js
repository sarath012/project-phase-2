import React, { useContext, useState, useEffect } from "react";
import { appContext } from "../../Context/AppContext";
import "./Header.css";

export default function Header({ data }) {
  const {
    selectedProduct,
    setSelectedProduct,
    sortArray,
    setSortArray,
    titleFilter,
    setTitleFilter,
  } = useContext(appContext);

  

  // useEffect(() => {
  //   function sortedarray(sortArray) {
  //     const types = {
  //       none: "",
  //       price: "price",
  //       rating: "rating",
  //       discountPercentage: "discountPercentage",
  //     };
  //     const sortProperty = types[sortArray];
  //     const sorted = [...selectProducts].sort(
  //       (a, b) => a[sortProperty] - b[sortProperty]
  //     );
  //     setSelectProducts(sorted);
  //   }
  //   sortedarray(sortArray);
  // }, [sortArray]);

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
            onChange={(e) => setTitleFilter(e.target.value)}
          />
        </div>

        <div>
          <select onChange={(e) => setSortArray(e.target.value)}>
            <option value="none" selected disabled>
              none
            </option>
            <option value="price">Price Ascending</option>
            <option value="rating">Rating Ascending</option>
            <option value="discountPercentage">Discount Percentage</option>
          </select>
        </div>
        <div></div>
      </div>
    </div>
  );
}
