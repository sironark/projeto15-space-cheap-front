import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import backgroundImage from "../assets/background.png";
import spaceCheapLogo from "../assets/spacecheap.png"
import { UserContext } from '../contexts/UserContext';

export function SignInPage() {
  const BaseURL = '';
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setToken, setUser } = useContext(UserContext);

  function login(e) {
    const body = { email, password };

    const promise = axios.post(`${BaseURL}/`, body);

    promise.then(res => {
      console.log(res.data);
      const { _id, name } = res.data.usuario;
      setUser({ _id, nome });
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);
      navigate('/')
    });

    promise.catch(err => {
      alert(err.response.data);
      setEmail("");
      setPassword("");
    });
  }

  return (
    <>
      <Container>
        <Logo src={spaceCheapLogo} />

        <Form onSubmit={login}>
          <Input
            type="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit" data-test="login-btn">
            LOGIN
          </Button>
        </Form>

        <Login>
          <Link to={"/signup"}>
            <p>DON'T HAVE AN ACCOUNT? REGISTER NOW!</p>
          </Link>
        </Login>
      </Container>
    </>
  );
}

const Form = styled.form`
  width: 100vw;
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
  margin-top: 16px;
  border: 2px solid white;
  background-color: transparent;
  padding-left: 10px;
  font-family: 'Press Start 2P';

  ::placeholder {
    color: white;
  }
`;

const Button = styled.button`
  background-color: #880F52;
  height: 50px;
  width: 200px;
  font-weight: 900;
  font-family: "Oswald";
  font-size: 30px;
  margin-top: 80px;
  color: white;
  font-family: 'Press Start 2P';
`;

const Logo = styled.img`
  height: 100px;
  width: auto;
  margin-top: 120px;
  margin-bottom: 70px;
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
`;

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
`;
