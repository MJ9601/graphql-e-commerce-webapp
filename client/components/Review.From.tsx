import { Rating } from "@mui/material";
import React, { FormEvent, useState } from "react";
import {
  ProductDocument,
  useCreateRatingMutation,
  useCreateReviewAndRatingMutation,
  useCreateReviewMutation,
} from "../graphql/generated";

const ReviewFrom = ({ productId }: { productId: string }) => {
  const [rate, setRate] = useState(0);
  const [description, setDescription] = useState("");

  const [createReview, { data }] = useCreateReviewMutation();
  const [createReviewAndRating] = useCreateReviewAndRatingMutation();
  const [createRating] = useCreateRatingMutation();

  const handelSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!rate && !description) return;
    else if (!rate && description)
      createReview({
        variables: { input: { productId, description } },
        update: (cache, data) => {
          cache.writeQuery({
            query: ProductDocument,
            data: data.data?.createReview,
          });
        },
      });
    else if (rate && !description)
      createRating({
        variables: { input: { productId, rate } },
        update: (cache, data) => {
          cache.writeQuery({
            query: ProductDocument,
            data: data.data?.createRating,
          });
        },
      });

    createReviewAndRating({
      variables: { input: { description, productId, rate } },
      update: (cache, data) => {
        cache.writeQuery({
          query: ProductDocument,
          data: data.data?.createReviewAndRating,
        });
      },
    });
    setRate(0);
    setDescription("");
  };

  return (
    <div className="py-2">
      <form action="" className="space-y-4" onSubmit={handelSubmit}>
        <Rating
          value={rate}
          onChange={(e, newValue) => {
            setRate(newValue as number);
          }}
          name="simple-controlled"
        />
        <label htmlFor="" className="label">
          <textarea
            placeholder="Leave a comment"
            className="input h-24"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default ReviewFrom;
