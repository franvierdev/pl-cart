import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";
export default function MyModal({
  isOpen,

  closeModal,
  openModal,
  contenido,
  setContenido,
  precios,
  setPrecios,
}: any) {
  console.log(contenido);
  const remover = () => {
    setContenido([]);
    setPrecios(0);
    closeModal();
  };
  return (
    <>
      <div className="inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-full bg-[hsl(14,86%,42%)] w-full py-3 text-sm font-medium text-white hover:bg-[hsl(14,94%,60%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Confirm Order
        </button>
      </div>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-lg transform overflow-hidden rounded-lg bg-white p-8 text-left align-middle shadow-xl transition-all">
                  <Image
                    src="/images/icon-order-confirmed.svg"
                    height={40}
                    width={40}
                    alt="OC"
                    className="pb-4"
                  />
                  <DialogPanel
                    as="h3"
                    className="text-3xl font-extrabold leading-6 "
                  >
                    Order Confirmed
                  </DialogPanel>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">
                      We hope you enjoy your food!
                    </p>
                  </div>
                  <div className="bg-[hsl(20,50%,98%)] p-4 mt-4 rounded-lg">
                    {contenido.map((item: any) => {
                      console.log(item.image?.thumbnail);
                      console.log(item.price * item.count);

                      return (
                        <div
                          key={item.name}
                          className="py-4 border-b-2 flex justify-between"
                        >
                          <div className="flex gap-2 items-center">
                            <Image
                              src={item.image?.thumbnail.slice(8)}
                              height={100 / 2}
                              width={96 / 2}
                              alt="OC"
                              className=""
                            />
                            <div className="">
                              <p className="font-bold text-xs">{item.name}</p>
                              <div className="font-bold flex text-sm gap-8 mt-1">
                                <p className="text-[hsl(14,86%,42%)]">
                                  {item.count}x
                                </p>
                                <p className="text-gray-400">${item.price}0</p>
                              </div>
                            </div>
                          </div>

                          <p className="font-bold self-center text-sm">
                            ${(item.price * item.count).toFixed(2)}
                          </p>
                        </div>
                      );
                    })}
                    <div className="flex justify-between items-center  pt-8 pb-2">
                      <p className="text-sm">Order Total </p>
                      <p className="text-xl font-bold">
                        {" "}
                        ${precios.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button
                      onClick={remover}
                      type="button"
                      className="rounded-full bg-[hsl(14,86%,42%)] w-full py-3 text-sm font-bold text-gray-200 hover:bg-[hsl(14,94%,60%)] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                    >
                      Start New Order
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
