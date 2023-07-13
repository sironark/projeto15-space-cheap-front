import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";


export default function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/carrinho" element={<CartPage/>} />
          <Route path="/produto" element={<ProductPage/>} />
        </Routes>
      </BrowserRouter>
    
  )
}


