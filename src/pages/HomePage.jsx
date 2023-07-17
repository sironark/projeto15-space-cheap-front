import { Header } from "./Header";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export function HomePage() {
  const [products, setProducts] = useState([]); // Initialize products as an empty array

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
      .then((res) => {
        setProducts({...res.data}); // Update the state with the fetched products
        console.log("res.data")
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <>
      <Header />

      <StyledLogoConteiner>
        {products.map((p) => (
          <Link to={`/product/${p._id}`} key={p._id}>
            <ConteinerProduto>
              {p.name} 
              {p.price} 
            </ConteinerProduto>
          </Link>
        ))}
      </StyledLogoConteiner>
    </>
  );
}

const StyledLogoConteiner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ConteinerProduto = styled.div`
  border: #d9d9d9 0.1em solid;
  height: 200px;
  width: 700px;
  border-color: #ffffff;
`;
