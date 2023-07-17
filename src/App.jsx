import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { useState } from "react";
import { CartContext } from "./context/CartContext";
import ProductPage from "./pages/ProductPage";


export default function App() {
  const [totalPrice, setTotalPrice] = useState(0)
  

  return (
    
      <BrowserRouter>
      <CartContext.Provider value={{totalPrice,setTotalPrice}}>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/carrinho" element={<CartPage/>} />
          <Route path="/produto" element={<ProductPage/>} />
        </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    
  )
}


