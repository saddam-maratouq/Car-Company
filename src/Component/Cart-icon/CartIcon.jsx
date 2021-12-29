import React, { useEffect, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons' 
import { Link } from 'react-router-dom' 
import './CartIcon.styles.css' 
import { useSelector } from "react-redux";


const CartIcon = () => { 

  const Cart = useSelector((state) => state.Cars.Cart);
    console.log(Cart); 


    const [countqty,SetCountQty] = useState(0) 

    const CounterQty = () => {
        let count = 0 ;
        Cart.forEach(el => {
        count += el.qty 
        });
      SetCountQty(count) 
    } 



    useEffect(() => {
        CounterQty(); 
    }, [Cart,countqty]) 





    return (
      
        <div id="cart-icon"> 
        <Link  to='/Cart' > 
            <FontAwesomeIcon className='shoping-cart' icon={faShoppingCart} >  </FontAwesomeIcon> 

           {Cart.map(item => (
                <span key={item.id} className="badge bg-danger "> {countqty} </span> 
           )) }
               
              
           
        </Link> 
        </div>
    )
}

export default CartIcon 
 

