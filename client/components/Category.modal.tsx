import { gql } from "@apollo/client";
import { Box, Button, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { useCreateCatMutation } from "../graphql/generated";
import { useAppDispatch, useAppSelector } from "../utils/cms/app/hooks";
import {
  selectAddCat,
  setCloseAddCatModel,
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

const Categorymodal = () => {
  const [name, setName] = useState("");
  const addCatModel = useAppSelector(selectAddCat);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setCloseAddCatModel());
  const [createCat, { data, loading }] = useCreateCatMutation();

  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (name) {
      createCat({
        variables: { input: { name } },
        update: (cache, data) => {
          cache.modify({
            fields: {
              allCategories(exsitingCats = []) {
                const newCatsRef = cache.writeFragment({
                  data: data.data?.createCat,
                  fragment: gql`
                    fragment NewCat on allCats {
                      _id
                      name
                      products
                    }
                  `,
                });
                return [...exsitingCats, newCatsRef];
              },
            },
          });
        },
      });
    }
    dispatch(setCloseAddCatModel());
    setName("");
  };

  return (
    <>
      <Modal
        open={addCatModel}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            New Category
          </Typography>
          <div className="py-3 mt-3">
            <form
              action=""
              className="w-full space-y-4"
              onSubmit={handelSubmit}
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
              <input type="submit" value="submit" className="submitButton" />
            </form>
          </div>
        </Box>
      </Modal>
    </>
  );
};

export default Categorymodal;
