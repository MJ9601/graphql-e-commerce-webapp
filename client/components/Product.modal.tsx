import { gql } from "@apollo/client";
import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import {
  AllCategoriesDocument,
  AllProductsDocument,
  Product,
  UpdateProductDetailsDocument,
  useAllCategoriesQuery,
  useCreateProductMutation,
  useProductQuery,
  useUpdateProductDetailsMutation,
} from "../graphql/generated";
import { useAppDispatch, useAppSelector } from "../utils/cms/app/hooks";
import {
  selectAddProduct,
  selectUpdateProduct,
  setCloseAddProductModel,
  setCloseUpdateProductModel,
} from "../utils/cms/features/adminNavSlic";
import { selectProduct, setProduct } from "../utils/cms/features/productSlic";

const Productmodal = () => {
  const addProductModel = useAppSelector(selectAddProduct);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setCloseAddProductModel());
    dispatch(setCloseUpdateProductModel());
  };
  const { data: cats } = useAllCategoriesQuery();
  const updateModel = useAppSelector(selectUpdateProduct);
  const currentProduct = useAppSelector(selectProduct);

  const { data: __product } = useProductQuery({
    variables: { input: { productId: currentProduct?.productId as string } },
  });

  // dispatch(setProduct(__product?.product as Product));

  const [updatingProduct] = useUpdateProductDetailsMutation();
  const [createProduct] = useCreateProductMutation();

  const [name, setName] = useState(
    updateModel ? (currentProduct?.name as string) : ""
  );
  const [price, setPrice] = useState(updateModel ? currentProduct?.price : "");
  const [count, setCount] = useState(updateModel ? currentProduct?.count : "");
  const [image, setImage] = useState(updateModel ? currentProduct?.image : "");
  const [category, setCategory] = useState(
    updateModel ? currentProduct?.category?._id : ""
  );
  const [description, setDescription] = useState(
    updateModel ? currentProduct?.description : ""
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const productId = updateModel ? (currentProduct?.productId as string) : "";
    console.log({ name, price, count, description, category, image });

    if (!name || !price || !count || !image || !category || !description)
      return alert("all the Field are needed");
    !updateModel
      ? createProduct({
          variables: {
            input: { category, count, description, name, price, image },
          },
          refetchQueries: [{ query: AllCategoriesDocument }],
          update: (cache, data) => {
            cache.modify({
              fields: {
                allProducts(existingData = []) {
                  const newProduct = cache.writeFragment({
                    data: data.data?.createProduct,
                    fragment: gql`
                      fragment NewProduct on allProducts {
                        name
                        price
                        image
                        count
                        description
                        category
                      }
                    `,
                  });
                  return [...existingData, newProduct];
                },
              },
            });
          },
        })
      : updatingProduct({
          variables: {
            input: {
              productId,
              category,
              count: +count,
              name,
              description,
              image,
              price: +price,
            },
          },
          refetchQueries: [AllCategoriesDocument],
          update: (cache, data) => {
            cache.writeQuery({
              query: UpdateProductDetailsDocument,
              data: data.data?.updateProductDetails,
            });
            cache.updateQuery(
              {
                query: AllProductsDocument,
              },
              (_data) => ({
                allProducts: _data.allProducts.map((_product: Product) =>
                  _product.productId === productId
                    ? data.data?.updateProductDetails
                    : _product
                ),
              })
            );
          },
        });

    dispatch(setCloseAddProductModel());
    dispatch(setCloseUpdateProductModel());

    setName("");
    setPrice("");
    setCount("");
    setDescription("");
    setImage("");
    setCategory("");
  };

  return (
    <>
      <Modal
        open={addProductModel || updateModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={(theme) => ({
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 800,
            bgcolor: "background.paper",
            borderRadius: "4px",
            boxShadow: 24,
            p: 4,
            [theme.breakpoints.down("md")]: {
              width: 400,
            },
          })}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Product
          </Typography>
          <div className="py-3 mt-3">
            <form
              action=""
              className="w-full space-y-4"
              onSubmit={handleSubmit}
            >
              <label htmlFor="" className="label">
                Name:
                <input
                  type="text"
                  className="input"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label htmlFor="" className="label">
                Price:
                <input
                  type="number"
                  className="input"
                  step={0.01}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label htmlFor="" className="label">
                Count:
                <input
                  type="number"
                  className="input"
                  value={count}
                  onChange={(e) => setCount(e.target.value)}
                />
              </label>
              <label htmlFor="" className="label">
                Image:
                <input
                  type="text"
                  className="input"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </label>
              <label htmlFor="" className="label">
                Category:
                <select
                  className="input"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {cats?.allCategories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="" className="label">
                Description:
                <textarea
                  className="input h-24"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <input type="submit" value="submit" className="submitButton" />
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Productmodal;
