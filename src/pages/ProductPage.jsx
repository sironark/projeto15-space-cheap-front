import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components"


export function ProductPage(){
const [info, setInfo]= useState()


    useEffect( () =>{
        axios.get("http://localhost:5000/product/")
        .then((res)=>{
            console.log(res.data)
            setInfo({...res.data})
            
        })
        .catch(error =>{
            console.log(error.data) 
        })

        
    },[])


return(
    
    <PageProductSyled>
        <HeadStyled>
            <div>
                <h1>SPACECHEAP</h1>
            </div>
            <div>
                <button>CART</button>
                <button>LOGIN</button>
            </div>
        </HeadStyled>

        <ContainerInfo>
            
            <ImageStyled>
                <img src={info.linkPhoto}alt="imagem da nave"/>
            </ImageStyled>
            <DesciptionStyled>
                
        
                    <div>{info.name}</div>
                    <div>{info.description}</div>
                    <div>R$ {info.price}</div>
                    <button>ADD TO CART </button>
                    
            </DesciptionStyled>
           
        </ContainerInfo>
    </PageProductSyled>
)
}

const PageProductSyled = styled.div`
  width: 95%;
  height: 100vh;


`;

const HeadStyled = styled.div`
width: 100%;
height: 80px;
color: white;
font-weight: 400;
font-family: 'Lexend Deca', sans-serif;
font-family: 'Press Start 2P', cursive;


display: flex;
justify-content:flex-end;
align-items: center;
:first-child{
    display: flex;
    justify-content: center;
    margin:auto;

}
:nth-child(2){
    min-width: 15%;
    display: flex;
    justify-content:flex-start;
    position: relative;
    right: 25px;
   
}
button{
        font-size: 14px;
        background-color:transparent;
        color: white;
        border: none;
        &:focus{
            cursor: pointer;
        }
        
    }

`;

const ContainerInfo = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
    margin-top: 60px;
    //background-color:red
    
`;

const ImageStyled = styled.div`
width: 40%;
display: flex;
margin-right: 80px;
    justify-content: flex-end;
    align-items: center;
img{
    width: 70%;
    
}
`;

const DesciptionStyled = styled.div`
width:35%;
color:white;
margin-left: 10px;


:nth-child(1){
    font-size: 50px;
    margin-bottom: 15px;
}
:nth-child(2){
    font-size: 20px;
    margin-bottom: 15px;
}

button{
    width: 140px;
    height: 30px;
    color:white;
    background-color: #880F52;
    border-style: hidden;
    margin-top: 20px;
}
`;