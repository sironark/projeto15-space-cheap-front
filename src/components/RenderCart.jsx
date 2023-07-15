import axios from "axios"
import { useEffect, useState } from "react"


export function RenderCart(){
    const [countPrice, setCountPrice] = useState(1)
    const [cart, setCart] = useState([])

    useEffect(()=>{
        getCart()
    },[])

    function plus(e){
        e.preventDefault()
        if(countPrice<9){
            const number = countPrice + 1
            setCountPrice(number)
        }
    }

    function less(e){
        e.preventDefault()
        if(countPrice>1){
            const number = countPrice - 1
            setCountPrice(number)
        }
    }
    function handleValue(e){
        e.preventDefault()
    }

    function getCart(){
        const _id = '123456789'
        axios.get(`http://localhost:5000/cart/${_id}`)
            .then((res) =>{
                console.log(res.data)
                setCart(res.data)
                
            })
            .catch(err => console.log(err.message.data))
    }

    return(
        <>
        {cart.map((prod)=>(
            <li key={prod._id}>
            <p>{prod.shipName}</p>
            <button className="plus" onClick={plus}>+</button><input value={countPrice} onChange={handleValue} type="number" max={10} min={0}/><button className="less" onClick={less}>-</button>
            <p>{prod.price}</p>
        </li> 
        ))}
        </>
    )}

   