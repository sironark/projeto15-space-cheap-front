
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
    const [confPassword, setConfPassword ] = useState('')

    const [form, setForm] = useState({ name:"", email: "", password: "", confPassword:"" })

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    function register(e) {
        e.preventDefault();
        const URL = 'http://localhost:5000/sign-up'

        if(form.password != form.confPassword) return alert("senhas diferentes")
          delete form.confPassword

        const promise = axios.post(URL, form);
        promise
          .then((res) => {
            navigate('/signin');
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

            <Form onSubmit={register}>
                <Input 
                  value={form.name}
                  type="name" 
                  placeholder="NAME" 
                  required
                  name='name'
                  onChange={handleForm} 
                />
            
                <Input
                  value={form.email}
                  type="email"
                  placeholder="EMAIL"
                  required
                  name='email'
                  onChange={handleForm}
                />
                
                <Input
                  value={form.password}
                  type="password"
                  placeholder="PASSWORD"
                  required
                  name="password"
                  onChange={handleForm}
                />

                <Input
                  value={form.confPassword}
                  type="password"
                  name='confPassword'
                  placeholder="CONFIRM PASSWORD"
                  required
                  onChange={handleForm}
                />

                <Button type="submit" >
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

const Form = styled.form`
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