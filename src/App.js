
import "./App.css";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Product from "./Components/Product/Product";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  // const [sortArray, setSortArray] = useState("");
  // const [titleFilter, setTitleFilter] = useState("");
  // const [filter, setFilter] = useState({
  //   brand: [],
  //   category: [],
  //   stock: true,
  // });
  // const [cart,setCart] = useState([]);

  return (
    <div className="App">
      {/* <appContext.Provider
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
          setFilter,
          cart,
          setCart
        }}
      > */}
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path='/products/:productid' element={<Product />} />
      
          </Routes>
        </BrowserRouter>
      {/* </appContext.Provider> */}

      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
