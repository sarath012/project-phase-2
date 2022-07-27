import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import { appContext } from "./Context/AppContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortArray, setSortArray] = useState("");
  const [titleFilter,setTitleFilter] = useState("");
  const [filter, setFilter] = useState({
    brand: [],
    category: [],
    stock: true
  })

  return (
    <div className="App">
      <appContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          selectedProduct,
          setSelectedProduct,
          sortArray,
          setSortArray,
          titleFilter,
          setTitleFilter,
          filter, 
          setFilter
        }}
      >
        {isLoggedIn ? <Products /> : <Login />}
      </appContext.Provider>
    </div>
  );
}

export default App;
