import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/CartContext.js"


export function RenderCart(){
    const [countPrice, setCountPrice] = useState(1)
    const {totalPrice, setTotalPrice} = useContext(CartContext)
    const [cartList, setCartList] = useState([])
    const [array, setArray] = useState([])
    const [parcialTPrice, setParcialTPrice] = useState([])

    useEffect(getCart,[])
    useEffect(sumPrice,[cartList])

    function getCart(){
        const _id = '123456789'
        axios.get(`http://localhost:5000/cart/${_id}`)
            .then((res) =>{
                setCartList(res.data)
                console.log(res.data)       
            })
            .catch(err => console.log(err.message.data))      
    }

    function sumPrice(){
        let sum = 0;
        let aux = [...array]
        let aux2 = [...parcialTPrice]
        cartList.forEach((element) => {
            sum = sum + element.price
            aux.push(1)
            setArray(aux) 
            aux2.push(element.price)
            setParcialTPrice(aux2)
        });    
        setTotalPrice(sum)
    }

    function plus(ship, index){       
            
            if(array[index]<9){
                const number = countPrice + 1
                setCountPrice(number)
                const auxArray = [...array]
                auxArray[index] = auxArray[index] + 1
                setArray(auxArray)
                setTotalPrice(totalPrice + ship.price)
            }           
    }

    function less(ship, index){
        
            if(array[index]>0){
            const number = countPrice - 1
            setCountPrice(number)
            const auxArray = [...array]
            auxArray[index] = auxArray[index] - 1
            setArray(auxArray)
            setTotalPrice(totalPrice - ship.price)
            }
    }
    

    return(
        <ul className="cartProducts">
            {cartList.map((prod, index)=>(
                <li key={index}>
                    <p>{prod.shipName}</p>

                        <button className="plus" 
                        onClick={()=>plus(prod, index)}>+</button>

                            <div>{array[index]<0 ? 0 : array[index] > 9 ? 9 : array[index] }</div>

                        <button className="less" 
                        onClick={()=>less(prod, index)}>-</button>

                    <p>{(parcialTPrice[index]*(array[index]<0 ? 0 : array[index] > 9 ? 9 : array[index] ))}</p>
                </li> 
            ))}
        </ul>
    )}

   