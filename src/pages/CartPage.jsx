
import { styled } from "styled-components";
import { RenderCart } from "../components/RenderCart";

export function CartPage(){
  
    return(
    
    <ContainerBody>
        <RenderProducts>
            <div className="title">
                <h1>PRODUCT</h1>
                <h1>AMOUNT</h1>
                <h1>PRICE</h1>
            </div>
            <ul className="cartProducts">
                <RenderCart/>
            </ul>


        </RenderProducts>
     
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
`
const RenderProducts = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    color: white;
    border: 1px solid white;
    overflow-y: scroll;
    

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
        font-size: 30px;
        display: flex;
        flex-direction: column;
        padding-top: 50px;
        box-sizing: border-box;
        li{
            font-size: 30x;
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
            
            input{
                position: absolute;
                right: 296px;
                top: 0px;
                background: none;
                border: none;
                font-family: 'Press Start 2P', cursive;
                font-size: 30px;
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