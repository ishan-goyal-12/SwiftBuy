"use client"

import Image from "next/image"

const CartModal = () => {


  const cartItems = true

  return (
    <div className="w-max absolute p-4 text-white rounded-md top-12 right-0 text-sm tracking-widest glassmorphism z-20 shadow-glass flex flex-col gap-6">
      {!cartItems ? (
        <div className="">Cart is empty...</div>
      ) : (
        <>
        <h2 className="text-xl">Your Cart</h2>
        {/* LIST */}
          <div className="flex flex-col gap-8">
            {/* ITEM */}
            <div className=" flex gap-4">
              <Image src="/pixabay.png" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 px-2 bg-amber-50 rounded-full text-black">Rs. 599</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-400">
                    available
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Qty. 1</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className=" flex gap-4">
              <Image src="/pixabay.png" alt="" width={72} height={96} className="object-cover rounded-md"></Image>
              <div className="flex flex-col justify-between w-full">
                {/* TOP */}
                <div className="">
                  {/* TITLE */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 px-2 bg-amber-50 rounded-full text-black">Rs. 599</div>
                  </div>
                  {/* DESC */}
                  <div className="text-sm text-gray-400">
                    available
                  </div>
                </div>
                {/* BOTTOM */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Qty. 1</span>
                  <span className="text-blue-500 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
          </div>
        {/* BOTTOM */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="text-lg">Subtotal</span>
              <span className="p-2 rounded-full text-white text-xl">Rs. 1198</span>
            </div>
            <p className="text-gray-400 text-md mt-2 mb-4">
              Shipping is calculated at checkout.
            </p>
            <div className="flex justify-between text-sm">
              <button className="rounded-md px-4 py-3 ring-1 ring-gray-300 cursor-pointer">View Cart</button>
              <button className="rounded-md px-4 py-3 bg-black text-white cursor-pointer">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default CartModal