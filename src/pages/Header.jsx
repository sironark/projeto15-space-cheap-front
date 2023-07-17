import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import {useState } from "react";
import spaceCheapLogo from "../assets/spacecheap.png"

export function Header() {
    const navigate = useNavigate();
    const [NomeBotao, setBotão] = useState("LOGIN")


    function movingPage(event) {
        if (token) {
            navigate("/home")
            setBotão("EXIT")
        } else {
            navigate("/login")
        }
    }

    function movingCart(event) {
        navigate("/cart")
    }
    return (
        <>
            <StyledLogoConteiner>
                <Logo>
                    <Link to={"/home"}>
                        <img src={spaceCheapLogo} />
                    </Link>
                </Logo>
                <ConteinerPages>
                    <button onClick={movingCart}>
                        CART
                    </button>
                    <button onClick={movingPage}>
                        {NomeBotao}
                    </button>
                </ConteinerPages>
            </StyledLogoConteiner >
        </>
    )
}

const StyledLogoConteiner = styled.div`
    width:100%;
    heigth:162px;
    display: flex;
    justify-content: center; 
    margin: 40px 0 40px 0;
    color: #ffffff;
    font-size: 15px;
    }
    `
const Logo = styled.div`
width:80%;
display:flex;
justify-content: center;
    img{
        height:60px;
    }
`

const ConteinerPages = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 15px;
    gap: 20px;
    button{
        color: #ffffff;
        background: none;
        border: none;
        font-family: 'VT323', monospace;
            font-size: 30px;

        }
    }
`