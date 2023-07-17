import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { ProductPage } from "./pages/ProductPage.jsx"
import { SignInPage } from "./pages/SignInPage.jsx";
import { SignUpPage } from "./pages/SignUpPage.jsx";
import { UserContext } from "./contexts/UserContext.js";
import { TokenContext } from "./contexts/TokenContext.js";
import { CartContext } from "./context/CartContext.js";
import { ShipContext } from "./contexts/ShipContext.js";

export default function App() {
  const [user, setUser] = useState({});
  const [token, setToken] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);
  const [shipId, setShipId] = useState(0);
  return (
    <BrowserRouter>
    <ShipContext.Provider value={{shipId, setShipId}}>
      <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <CartContext.Provider value={{ totalPrice, setTotalPrice }}>
            <Routes>
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/product" element={<ProductPage />} />
            </Routes>
          </CartContext.Provider>
        </UserContext.Provider>
      </TokenContext.Provider>
      </ShipContext.Provider>
    </BrowserRouter>
  );
}
