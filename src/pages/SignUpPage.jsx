
import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import backgroundImage from "../assets/background.png";
import spaceCheapLogo from "../assets/spacecheap.png"



export function SignUpPage(){

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    function register(e) {
        e.preventDefault();
        const URL = ''

        const body = { name, email, password };
    
        const promise = axios.post(URL, body);
        promise
          .then((res) => {
            localStorage.setItem('Token', res.data.token);
            navigate('/login');
          })
          .catch((err) => {
            alert(err.response.data.message);
          });
      }
    return(
    <>
        <Container>

            <Logo
              src={spaceCheapLogo}
            />  

            <Form onSubmit={login}>
                <Input 
                  type="name" 
                  placeholder="NAME" 
                  defaultValue={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
            
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

                <Input
                  type="password"
                  placeholder="CONFIRM PASSWORD"
                  defaultValue={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button 
                  type="submit" 
                  onClick={register}
                  data-test="register-btn">
                  REGISTER
                </Button>
            </Form>

            <Login>
                <Link 
                  to={"/login"}>
                  <p>ALREADY HAVE AN ACCOUNT? SIGN IN!</p>
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
  height: 52px;
  width: 55%;
  background-color: white;
  text-align: center;
  font-size: 22px;
  text-align: left;
  color: white;
  font-weight: 900;
  margin-top: 20px;
  border: 2px solid white;
  background-color: transparent; 
  padding-left: 10px; 
  font-family: 'Press Start 2P';

  ::placeholder {
    color: white;
  }
  input::placeholder {
    color:white;
  }

`;

const Button = styled.button`
  background-color: #880F52;
  height: 50px;
  width: 270px;
  font-weight: 900;
  font-size: 30px;
  margin-top: 50px;
  color: white;
  font-family: 'Press Start 2P';

`;


const Logo = styled.img`
  height: 100px;
  width: auto;
  margin-top: 40px;
  margin-bottom: 20px;
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
font-family: 'Press Start 2P';
font-weight: 300;

  	p {
      text-decoration: none;
      color: white;
      margin-top: 30px;
      font-size: 12px;
    }
`