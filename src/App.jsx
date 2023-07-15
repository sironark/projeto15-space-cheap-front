import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartPage } from "./pages/CartPage";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { SignInPage } from "./pages/SignInPage";
import { SignUpPage } from "./pages/SignUpPage";
import { UserContext } from "./contexts/UserContext";
import { TokenContext } from "./contexts/TokenContext";



export default function App() {

  const [user, setUser] = useState({})
  const [token, setToken] = useState({})
  
  return (
    
      <BrowserRouter>
        <TokenContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/login" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/product" element={<ProductPage/>} />
          </Routes>
        </UserContext.Provider>
        </TokenContext.Provider>
      </BrowserRouter>
    
  )
}


