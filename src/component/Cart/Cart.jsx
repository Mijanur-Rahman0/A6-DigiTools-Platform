import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts}) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const handlePayment = () => {
        setCarts([]);
        toast.success('Payment successful!');
    }

  const handleDelete = (item) => {
    const filteredArray = carts.filter(c => c.id !== item.id);
    setCarts(filteredArray);
    toast.success('Item deleted!');
  }

  return (
    <div className="max-w-300 mx-auto p-10 text-black mb-15 shadow-lg">
      <h1 className="font-bold text-3xl mb-3">Your Cart</h1>
      {
        carts.length === 0 ? <p className="text-center text-4xl p-5"> Cart is empty</p> : 
        <>
        {carts.map((item) => (
        <div
          className="flex items-center justify-between rounded-full p-4 mb-2 shadow-lg"
          key={item.id}
        >
          <div className="flex gap-2 items-center p-2">
            <img className="h-10 w-10 object-contain" src={item.icon} alt="" />
            <div>
              <h2 className="text-xl font-bold">{item.name}</h2>
              <p>${item.price}</p>
            </div>
          </div>
          <button onClick={() => handleDelete(item)} className="text-red-600">Remove</button>
        </div>
      ))}
      <div className="flex justify-between p-4 mt-5 text-2xl">
        <div>Total:</div>
        <div className="font-bold text-2xl">$ {totalPrice}</div>
      </div>

      <button onClick={handlePayment} className="btn w-full mt-5 bg-primary rounded-full border-transparent">Proceed to Checkout</button>
        </>
      }
      
    </div>

  );
};

export default Cart;
