"use client";
import Image from "next/image";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const initialCart = [
  {
    id: "1",
    img: "https://lp2.hm.com/hmgoepprod?set=quality[79],source[/68/3b/683b4bfe0975246d4483476eeb7d5641dc94b953.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]",
    name: "A-line dress",
    price: 29.99,
    quantity: 1,
  },
  {
    id: "2",
    img: "https://lp2.hm.com/hmgoepprod?set=quality[79],source[/40/d2/40d2c635a0e983a5becbc365d7b629e3ae63d328.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/main]",
    name: "Sweetheart-neck thong body",
    price: 19.99,
    quantity: 2,
  },
];

const CartPage = () => {
  const [cart, setCart] = useState(initialCart);

  const removeFromCart = ({ id }: any) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = ({ id, quantity }: any) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen p-6 text-white ">
      <h1 className="text-4xl font-bold text-center mb-8">Shopping Cart</h1>
      <div className="max-w-4xl mx-auto shadow-lg rounded-lg p-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            {cart.map((item) => (
              <div key={item.id} className="flex items-center mb-6 gap-4">
                <Image
                  src={item.img}
                  width={100}
                  height={100}
                  alt={item.name}
                />
                <div className="ml-4 flex-1">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-400">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <label htmlFor={`quantity-${item.id}`} className="mr-2">
                      Qty:
                    </label>
                    <input
                      id={`quantity-${item.id}`}
                      type="number"
                      min="1"
                      value={item.quantity}
                      className="w-16 p-2 border rounded"
                    />
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="ml-4  hover:text-red-800"
                >
                  <MdDelete size={25} color="red" />
                </button>
              </div>
            ))}
            <div className="flex justify-between items-center mt-6 border-t pt-6">
              <span className="text-xl font-semibold">
                Total: ${total.toFixed(2)}
              </span>
              <button className="text-lg bg-transparent border-2 border-white hover:bg-white hover:text-black text-white py-2 px-6 transition-all ease-in-out">
                Continue to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
