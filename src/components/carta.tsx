"use client";
import Image from "next/image";
import { useState } from "react";

export default function Carta({ data }: any) {
  const [contenido, setContenido] = useState<{ name: string; count: number }[]>(
    []
  );
  const [precios, setPrecios] = useState(0);
  const [cantidad, setCantidad] = useState(0);
  console.log(contenido);

  return (
    <div className="flex justify-center py-6 gap-6 items-center ">
      <main className="">
        <h1 className="text-2xl  font-bold pt-2 pb-4">Desserts</h1>
        <div className=" grid gap-4 grid-cols-3 max-w-5xl ">
          {data.map((producto: any) => {
            // const [count, setCount] = useState(0);
            var productocarrito = contenido.find(
              (item) => item.name === producto.name
            );
            const contador: any = productocarrito?.count;
            console.log(contador);

            // var count: number = 0;
            const [cart, setCart] = useState(false);

            const handleSubmit = () => {
              setCart(!cart);
              // setCount(+1);

              setPrecios(precios + +producto.price);
              setCantidad(cantidad + 1);
              setContenido([...contenido, { ...producto, count: 1 }]);
              if (contenido.find((item) => item.name === producto.name)) {
                const productos = contenido.map((item) =>
                  item.name === producto.name
                    ? {
                        ...item,

                        count: contador === 0 ? contador : +1,
                      }
                    : item
                );
                return setContenido(productos);
              }
            };

            function agregarProductos(producto: any) {
              // setPrecios(count < 20 ? precios + +producto.price : precios);
              // setCantidad(count === 20 ? cantidad : cantidad + 1);
              // count + 1;
              // setContenido([...contenido, producto]);
              // count += 1;
              // setCount(count + 1);
              if (contenido.find((item) => item.name === producto.name)) {
                const productos = contenido.map((item) =>
                  item.name === producto.name
                    ? {
                        ...item,
                        name: item.name,
                        count: item.count + 1,
                      }
                    : item
                );
                return setContenido(productos);
              }
            }

            function descontarProductos(producto: any) {
              setPrecios(precios - +producto.price);
              setCantidad(cantidad - 1);
              // setCount(count >= 1 ? count - 1 : count);

              contador === 1 ? setCart(false) : setCart(true);
              if (contenido.find((item) => item.name === producto.name)) {
                const productos = contenido.map((item) =>
                  item.name === producto.name
                    ? {
                        ...item,
                        name: contador === 1 ? "nada" : item.name,
                        count: contador === 0 ? contador : contador - 1,
                      }
                    : item
                );

                const actProductos = productos.filter(
                  (item) => item.name !== "nada"
                );
                console.log(actProductos);
                return setContenido(actProductos);
              }
              //   const nada = contenido.filter((nada) => nada.name !== "nada");
              //   setContenido([nada]);
            }

            return (
              <div
                className=" flex flex-col font-semibold "
                key={producto.name}
              >
                <Image
                  src={producto.image.desktop.slice(8)}
                  className="rounded-lg border border-transparent hover:border hover:border-[hsl(14,86%,42%)]"
                  width={502 / 2}
                  height={480 / 2}
                  alt={producto.name}
                  priority
                />
                <div className="self-center -mt-5 text-sm">
                  {cart === false ? (
                    <button
                      className=" flex py-2 rounded-full bg-white border border-transparent w-36 self-center justify-center gap-1 hover:text-[hsl(14,86%,42%)] hover:border-[hsl(14,86%,42%)] hover:duration-300"
                      onClick={handleSubmit}
                    >
                      <Image
                        src="/images/icon-add-to-cart.svg"
                        width={24}
                        height={24}
                        alt="asd"
                        style={{ width: "auto" }}
                      />
                      Add to Cart
                    </button>
                  ) : (
                    <div className="py-2 rounded-full bg-[hsl(14,86%,42%)] text-white border w-36 h-[42px] self-center text-center flex justify-center items-center gap-9">
                      <button
                        className="border-2 rounded-full px-1 h-5 "
                        onClick={() => descontarProductos(producto)}
                      >
                        <Image
                          src="/images/icon-decrement-quantity.svg"
                          width={10}
                          height={10}
                          alt="decrement-quantity"
                        />
                      </button>

                      {contador ? contador : setCart(!cart)}

                      <button
                        className="border-2 rounded-full px-1 h-5"
                        onClick={() => agregarProductos(producto)}
                      >
                        <Image
                          src="/images/icon-increment-quantity.svg"
                          width={10}
                          height={10}
                          alt="decrement-quantity"
                        />
                      </button>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1 py-4 tracking-wide ">
                  <p className=" font-normal text-[hsl(7,20%,60%)]">
                    {producto.category}
                  </p>
                  <p className="text-[hsl(14,65%,9%)]">{producto.name}</p>
                  <p className="text-[hsl(14,86%,42%)]">${producto.price}0</p>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      {contenido.length ? (
        <div className="self-start bg-white rounded-lg px-4 py-6 w-96">
          <h2 className="font-extrabold text-xl pb-4 tracking-wide text-[hsl(14,86%,42%)] ">
            Your Cart ({cantidad})
          </h2>
          {contenido.map(({ name, count = 1, price }: any) => {
            const totalPrice = count * price;

            const remover = () => {
              setCantidad(cantidad - count);
              setPrecios(precios - totalPrice);
              count = 0;
              const borrar = contenido.filter((item) => item.name !== name);
              return setContenido(borrar);
            };
            console.log(contenido);

            return (
              <div key={name} className="py-4 border-b flex justify-between">
                <div>
                  <p className="font-bold text-xs">{name}</p>
                  <div className="font-bold flex text-sm gap-8 mt-1">
                    <p className="text-[hsl(14,86%,42%)]">{count}x</p>
                    <p className="text-gray-400">${price}0</p>
                    <p className="text-gray-600">${totalPrice.toFixed(2)}</p>
                  </div>
                </div>
                <button
                  onClick={remover}
                  className="border-2 rounded-full p-1 place-self-center"
                >
                  <Image
                    src="/images/icon-remove-item.svg"
                    width={10}
                    height={10}
                    alt="decrement-quantity"
                    className=""
                  />
                </button>
              </div>
            );
          })}
          <div className="flex justify-between items-center pt-8">
            <p className="text-xs">Order Total </p>
            <p className="text-xl font-bold"> ${precios.toFixed(2)}</p>
          </div>
          <div className="text-center pt-8 ">
            <button className="text-white text-sm w-full bg-[hsl(14,86%,42%)] py-3 rounded-full">
              Confirm Order
            </button>
          </div>
        </div>
      ) : (
        <div className="self-start bg-white rounded-lg px-4 py-6 w-96">
          <h2 className="font-extrabold text-xl pb-4 tracking-wide text-[hsl(14,86%,42%)] ">
            Your Cart (0)
          </h2>
          <div className="flex flex-col place-items-center w-full gap-4 my-4">
            <Image
              src={"images/illustration-empty-cart.svg"}
              width={120}
              height={120}
              alt="cart-empty"
              className="justify-self-center"
            />
            <p className="text-sm text-orange-800">
              Your added items will appear here
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
