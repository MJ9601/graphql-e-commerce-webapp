import { Delete } from "@mui/icons-material";
import React from "react";
import {
  Product,
  useAddProductToBoughtListMutation,
  UserDocument,
  useRemoveProductFromShoppingListMutation,
} from "../graphql/generated";

const ProductRow = ({
  product,
  boughtProduct,
}: {
  product: Product;
  boughtProduct?: boolean;
}) => {
  const [removeProductFromShop, {}] =
    useRemoveProductFromShoppingListMutation();
  const [addProductToBought, {}] = useAddProductToBoughtListMutation();

  return (
    <div className="rounded-md w-full ring-1 ring-gray-200 flex flex-col lg:flex-row lg:justify-between items-center overflow-hidden gap-4 p-2">
      <div className="flex justify-start">
        <img src={product.image} className="h-20 w-20 object-contain my-1" />
        <div className="space-y-2 flex-1">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <h3 className="text-lg font-semibold">
            price: <span className="text-green-500">${product.price}</span>
          </h3>
        </div>
      </div>
      {!boughtProduct && (
        <div className="flex justify-between min-w-max">
          <button
            className="customButton"
            onClick={() => {
              addProductToBought({
                variables: { input: { product: product._id as string } },
                update: (cache, data) => {
                  cache.writeQuery({
                    query: UserDocument,
                    data: data.data?.addProductToBoughtList,
                  });
                },
              });
            }}
          >
            Pay <span className="ml-1">${product.price}</span>
          </button>
          <button
            className="customDelButton"
            onClick={() => {
              removeProductFromShop({
                variables: { input: { product: product._id as string } },
                update: (cache, data) => {
                  cache.writeQuery({
                    query: UserDocument,
                    data: data.data?.removeProductFromShoppingList,
                  });
                },
              });
            }}
          >
            <Delete />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductRow;
