
import { styled } from "styled-components";
import { RenderCart } from "../components/RenderCart";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


export function CartPage(){
    const {totalPrice, price} = useContext(CartContext)
    
    return(
    
    <ContainerBody>
        <RenderProducts>
            <div className="title">
                <h1>PRODUCT</h1>
                <h1>AMOUNT</h1>
                <h1>PRICE</h1>
            </div>
           
            <RenderCart/>
        
        </RenderProducts>

        <p className="total">TOTAL {price + totalPrice}</p>
        <div className="containerBottom">
        <div className="address">
            <p>ADDRESS</p>
            <textarea placeholder="write your address and addicional informations" type="text" wrap="hard"></textarea>
        </div>
        <div className="purchase" onClick={()=> alert("finalizado")}>PURCHASE</div>
        </div>

    </ContainerBody> 
    
    );
}

const ContainerBody = styled.main`
    background-image: url('/assets/image1.svg');
    background-repeat: no-repeat;
    background-size: cover;
    height: calc(100vh);
    padding: 50px;
    box-sizing: border-box;
    font-family: 'VT323', monospace;
    .total{
        color: white;
        font-size: 40px;
        position: absolute;
        right: 85px;
    }
    .containerBottom{
        display: flex;
        position: relative;
        .address{
            width:700px;
            height: 384px;
            margin-top: 80px;
            color: white;
            border: 1px solid white;
            position: absolute;
            padding: 10px;
            box-sizing: border-box;
            position: absolute;
            p{
                font-size: 20px;
                position: absolute;
                left: 10px;
                top:10px
            }
            textarea{
                margin-top: 40px;
                width: 100%;
                height: 300px;
                border: none;
                background: none;
                color: white;
                font-style: bold;
                font-family: 'VT323', monospace;
                font-size: 36px;
                text-transform: uppercase;
                
            }
        ::-webkit-input-placeholder{
            color: white;
            text-transform: uppercase;
            font-style: bold;
            font-family: 'VT323', monospace;
            font-size: 36px;
            
    }
        }
        .purchase{
            width: 260px;
            height: 50px;
            background-color: #880F52;
            position: absolute;
            right: 30px;
            top: 400px;

            font-family: 'VT323', monospace;
            color: white;
            text-align: center;
            font-weight: bold;
            font-size: 40px;
            padding-top: 7px;
        }
    }
`

const RenderProducts = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    color: white;
    border: 1px solid white;
    overflow-y: hidden;

    .title{
        font-size: 20px;
        position: relative;
        display: flex;
        h1{
        position: absolute;
        top: 10px
        }
        :nth-child(1){
            left: 10px;
        }
        :nth-child(2){
            right: 300px;
        }
        :nth-child(3){
            right: 80px;
        }
    }

    .cartProducts{
        font-size: 40px;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        box-sizing: border-box;
        li{
            font-size: 40x;
            position: relative;
            width: 100%;
            height: 30px;
            margin-bottom: 20px;
            display: flex;
            
            :first-child{
                position: absolute;
                left: 10px;
            }
            :last-child{
                position: absolute;
                right: 40px;
            }
            
            div{
                position: absolute;
                right: 298px;
                top: 0px;
                background: none;
                border: none;
                font-family: 'Press Start 2P', cursive;
                font-size: 40px;
                width: 35px;
                color:white;
            }
            .plus{
                position: absolute;
                width: 26px;
                right: 350px;
                top: 4px;
                font-size: 20px;
                background-color: #000064;
                border:1px #000064 solid ;
                border-radius:50%;
                color: white;
            }
            .less{
                position: absolute;
                right: 270px;
                width: 26px;
                top: 4px;
                font-size: 20px;
                background-color: #000064;
                border:1px #000064 solid ;
                border-radius:50%;
                color: white;
            }
        
        }
        
    }
    
`
