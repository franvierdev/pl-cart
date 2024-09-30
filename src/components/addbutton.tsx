"use client";

import { useState } from "react";
import Image from "next/image";

export default function AddButton({ price, name, contador, setcontador }: any) {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    cart === false ? setCart(true) : setCart(false);
  };
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);
  console.log(count, price, name, contador.count);

  return (
    <div className="self-center -mt-5 text-sm">
      {cart === false ? (
        <button
          className=" flex py-2 rounded-full bg-white border w-36 self-center justify-center gap-1 hover:text-[hsl(14,86%,42%)] hover:border-[hsl(14,86%,42%)] hover:duration-300"
          onClick={handleSubmit}
        >
          <Image
            src="/images/icon-add-to-cart.svg"
            width={24}
            height={24}
            alt="asd"
          />
          Add to Cart
        </button>
      ) : (
        <div className="py-2 rounded-full bg-[hsl(14,86%,42%)] text-white border w-36 h-[42px] self-center text-center flex justify-center items-center gap-4">
          <button
            className="border rounded-full px-[9px] "
            onClick={() => {
              setCount(count >= 1 ? count - 1 : count);
              console.log(+price * (count - 1));
              console.log(count - 1);
            }}
          >
            -
          </button>
          <p>{count}</p>

          <button
            className="border rounded-full px-2"
            onClick={() => {
              setCount(count <= 19 ? count + 1 : count);
              setcontador({ count, name, price });
              console.log(+price * (count + 1));
              console.log(contador);
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
}
