import { Delete } from "@mui/icons-material";

const ProductCard = ({
  product,
  AdminAccess,
}: {
  product: any;
  AdminAccess: boolean;
}) => {
  return (
    <div
      className={`${
        !AdminAccess &&
        "cursor-pointer hover:-translate-y-2 transition-all duration-300"
      } w-[350px] min-w-[300px] rounded-md  overflow-hidden relative bg-white ring-1 ring-gray-200`}
    >
      <div className="absolute bg-red-500 py-1 px-3 rounded-full text-white text-sm right-2 top-1 font-bold">
        $500
      </div>
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
        {AdminAccess && (
          <div className="h-min">
            <p className="my-3 px-3 line-clamp-5 text-ellipsis ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              minus, numquam iure tenetur ullam corrupti sit quo tempore rerum
              quos quasi cumque totam quaerat excepturi facilis aliquid! Vero
              suscipit maiores iste laborum, alias laboriosam nihil sunt.
              Praesentium quaerat accusamus voluptatum facere ratione repellat
              nisi, optio cupiditate officia, voluptate iste dolorem!
            </p>
            <div className="flex gap-4 justify-end items-center">
              <button className="customButton">Update</button>
              <button className="customDelButton">
                <Delete />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
