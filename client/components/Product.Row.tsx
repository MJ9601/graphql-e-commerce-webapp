import React from "react";

const ProductRow = ({ product }: { product: any }) => {
  return (
    <div className="rounded-md w-full ring-1 ring-gray-200 flex justify-between items-center overflow-hidden gap-4">
      <img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        className="h-20 object-contain"
      />
      <div className="space-y-2 flex-1">
        <h3 className="text-lg font-semibold">name</h3>
        <h3 className="text-lg font-semibold">
          price: <span className="text-green-500">$500</span>
        </h3>
      </div>
      <div>
        <button className="customButton">
          Pay
        </button>
      </div>
    </div>
  );
};

export default ProductRow;
