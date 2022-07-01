const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="w-[350px] min-w-[300px] rounded-md hover:-translate-y-2 transition-all duration-300 overflow-hidden relative bg-white cursor-pointer ring-1 ring-gray-200">
      <img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        className="w-full object-cover"
      />
      <div className="py-3 px-3">
        <h3 className="text-lg">name</h3>
        <div className="flex justify-between mt-3 mr-5">
          <h4 className="text-sm">
            rate:
            <span className="ml-2 text-red-500">4.0</span>
          </h4>
          <h4 className="text-sm">
            Remaining:
            <span className="ml-2 text-red-500">4.0</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
