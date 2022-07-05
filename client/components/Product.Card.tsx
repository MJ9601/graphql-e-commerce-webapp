import { Delete } from "@mui/icons-material";
import { Router, useRouter } from "next/router";
import { Product } from "../graphql/generated";

type RateAndCount = {
  rate: number;
  count: number;
};

const ProductCard = ({
  product,
  AdminAccess,
}: {
  product: Product;
  AdminAccess: boolean;
}) => {
  const router = useRouter();

  const rateAndCount: RateAndCount = product?.reviews?.reduce(
    (previous, current) => {
      let count = 0;
      let rate = 0;
      if (current && current?.rate !== 0) {
        rate += +current?.rate;
        count += 1;
      }
      return { count, rate };
    },
    { rate: 0, count: 0 }
  );
  return (
    <div
      className={`${
        !AdminAccess &&
        "cursor-pointer hover:-translate-y-2 transition-all duration-300"
      } w-[350px] min-w-[300px] rounded-md  overflow-hidden relative bg-white ring-1 ring-gray-200`}
      onClick={() =>
        !AdminAccess && router.push(`/product/${product.productId}`)
      }
    >
      <div className="absolute bg-red-500 py-1 px-3 rounded-full text-white text-sm right-2 top-1 font-bold">
        {product.price}
      </div>
      <img
        src={product.image}
        className="w-full object-cover"
        alt={product.name}
      />
      <div className="py-3 px-3">
        <h3 className="text-lg">{product.name}</h3>
        <div className="flex justify-between mt-3 mr-5">
          <h4 className="text-sm">
            rate:
            <span className="ml-2 text-red-500">
              {rateAndCount?.count !== 0 &&
                `${rateAndCount?.rate / rateAndCount?.count}`}
            </span>
          </h4>
          <h4 className="text-sm">
            Remaining:
            <span className="ml-2 text-red-500">{`${product.count}`}</span>
          </h4>
        </div>
        {AdminAccess && (
          <div className="h-min">
            <p className="my-3 px-3 line-clamp-5 text-ellipsis ">
              {product.description}
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
