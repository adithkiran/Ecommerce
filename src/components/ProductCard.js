import React from "react";

function ProductCard({ title, image, category, price, id, HandlerAddCart }) {
  return (
    <div className="border rounded-md bg-gray-100 p-3 shadow-black-300 flex flex-col items-center shadow-lg">
      <div className="flex flex-col items-center">
        <img className="w-[200px] h-[100px] object-cover" src={image} alt="" />
        <p className="font-serif m-2 p-1"> {title}</p>
        <p className="p-1 font-semibold text-sm ">Category: {category}</p>
        <p className="p-1 font-semibold">Price: {price}</p>
      </div>
      <div>
        <button
          onClick={HandlerAddCart}
          className="border rounded-md bg-cyan-300 px-3 py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
