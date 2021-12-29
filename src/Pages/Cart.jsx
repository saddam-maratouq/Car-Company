import { useSelector } from "react-redux";
import CartItem from "../Component/Cart-item/CartItem";

const Cart = () => {
  const Cart = useSelector((state) => state.Cars.Cart);
  console.log(Cart);

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
    </div>
  );
};

export default Cart;


