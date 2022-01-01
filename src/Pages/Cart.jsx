import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Component/Cart-item/CartItem";

const Cart = () => {
  const Cart = useSelector((state) => state.Cars.Cart); 
  // console.log(Cart);

  

  

  
  // another way to calc total 
  
  const [total, SetTotal] = useState();
  
  const handelTotal = () => {
    let price =0 
    Cart.forEach(el => {
      price += el.price * el.qty 
    });
    SetTotal(price) 
  }
  
  useEffect(() => {
    // SetTotal(Cart.reduce((acc, item) => (acc + item.price) * item.qty, 0)); // some time change to number 
    handelTotal(); 
  }, [Cart,total]); 



  return (
    <div>
      <h1>Cart</h1>
      <div className="row">
        {Cart.map((item) => (
          <div className={"col-4"} key={item.id}>
            <CartItem key={item.id} item={item} />
          </div>
        ))}
      </div> 
      <br /> <br />
      <h3> Total : &#128178;{total} </h3>

      <div className="d-grid gap-2">
        <button className="btn btn-primary" type="button">
          Pay now
        </button>
      </div>
    </div>
  );
};

export default Cart;


