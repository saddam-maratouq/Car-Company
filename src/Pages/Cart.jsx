import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Component/Cart-item/CartItem";

const Cart = () => {
  const Cart = useSelector((state) => state.Cars.Cart);
  console.log(Cart);

  const [total, SetTotal] = useState();

  console.log(total);

  useEffect(() => {
    SetTotal(Cart.reduce((acc, item) => (acc + item.price) * item.qty, 0)); // some time change to number
  }, [Cart]);

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


