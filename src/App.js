
import "./App.css";
import Login from "./Components/Login/Login";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import { AddProduct } from "./Components/AddProduct/AddProduct";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout";


function App() {

  return (
    <div className="App">
      
        <BrowserRouter>
          <Routes>

            <Route path="/" element={<Login />} />
            <Route path="/products" element={<Products />} />
            <Route path='/products/:productid' element={<Product />} />
            <Route path="/addproduct" element={<AddProduct/>} />
            <Route path="/cart" element={ <Cart />} />
            <Route path="/checkout" element={ <Checkout />} />

          </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
