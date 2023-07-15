
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import backgroundImage from "../assets/background.png"

export function SignInPage(){


    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function login(e) {
        e.preventDefault();
        const URL = '';
        const body = { email, password };
    
        const promise = axios.post(URL, body);
        promise
          .then((res) => {
            localStorage.setItem('Image', res.data.image);
            localStorage.setItem('Token', res.data.token);
            navigate('/hoje');
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }

    return(
    <>
        <Container>
            <Logo/>
            <Form onSubmit={login}>
                <Input 
                type="email" 
                placeholder="EMAIL" 
                defaultValue={email} 
                onChange={(e) => setEmail(e.target.value)} 
                />
            
                <Input
                type="password"
                placeholder="PASSWORD"
                defaultValue={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button 
                type="submit" 
                onClick={login}
                data-test="login-btn">
                LOGIN
                </Button>
            </Form>
            <Login>
                <Link 
                to={"/cadastro"}>
                <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </Login>
        </Container>
    </>
    )
}

const Form = styled.div`
  width: 100vw ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  border: 0;
`;

const Input = styled.input`
  height: 63px;
  width: 60%;
  background-color: white;
  text-align: center;
  font-size: 22px;
  margin-top: 8px;
  text-align: left;
  color: white;
  font-weight: 900;
  margin-top: 36px;
  border: 2px solid white;
  background-color: transparent; 
  padding: 5px; 
  font-family: 'pixel-art';

  ::placeholder {
    color: white;
  }
  input::placeholder {
    color:white;
  }

`;

const Button = styled.button`
  background-color: #880F52;
  height: 70px;
  width: 246px;
  font-weight: 900;
  font-family: "Oswald";
  font-size: 22px;
  margin-top: 16px;
`;


const Logo = styled.img`
  width: 300px;
  height: auto;
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
const Login = styled.div`
width: 60%;
display: flex;
justify-content: center;
color: white;
text-decoration: none;
margin-top: 8px;
font-family: "Oswald";
font-weight: 300;
  	p {
      text-decoration: none;
      color: white;
    }
`