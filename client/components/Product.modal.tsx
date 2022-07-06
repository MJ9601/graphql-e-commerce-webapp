import { gql } from "@apollo/client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  AllCategoriesDocument,
  useAllCategoriesQuery,
  useCreateProductMutation,
} from "../graphql/generated";
import { useAppDispatch, useAppSelector } from "../utils/cms/app/hooks";
import {
  selectAddProduct,
  setCloseAddProductModel,
} from "../utils/cms/features/adminNavSlic";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "4px",
  boxShadow: 24,
  p: 4,
};

const Productmodal = () => {
  const addProductModel = useAppSelector(selectAddProduct);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setCloseAddProductModel());
  const { data: cats } = useAllCategoriesQuery();

  const [createProduct, { data, loading }] = useCreateProductMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const formData = new window.FormData(form);

    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const count = formData.get("count") as string;
    const image = formData.get("image") as string;
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;

    console.log({ name, price, count, description, category, image });

    if (!name || !price || !count || !image || !category || !description)
      return alert("all the Field are needed");

    createProduct({
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
    });

    form.reset();
    dispatch(setCloseAddProductModel());
  };

  return (
    <>
      <Modal
        open={addProductModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
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
                <input type="text" className="input" name="name" />
              </label>
              <label htmlFor="" className="label">
                Price:
                <input type="number" className="input" name="price" />
              </label>
              <label htmlFor="" className="label">
                Count:
                <input type="number" className="input" name="count" />
              </label>
              <label htmlFor="" className="label">
                Image:
                <input type="text" className="input" name="image" />
              </label>
              <label htmlFor="" className="label">
                Category:
                <select className="input " name="category">
                  {cats?.allCategories.map((category) => (
                    <option value={category._id} key={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </label>
              <label htmlFor="" className="label">
                Description:
                <textarea className="input h-24" name="description" />
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
