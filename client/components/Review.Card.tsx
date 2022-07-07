import { Delete } from "@mui/icons-material";
import { Rating } from "@mui/material";
import React from "react";
import {
  ProductDocument,
  Review,
  useDeleteReviewMutation,
  useMeQuery,
} from "../graphql/generated";

const ReviewCard = ({
  review,
  productId,
}: {
  review: Review;
  productId: string;
}) => {
  const date = new Date(review.createdAt);

  const { data: me } = useMeQuery();
  const [deleteReview] = useDeleteReviewMutation();

  return (
    <div className="my-2 px-3 ring-1 ring-gray-200 rounded-md w-full relative">
      {me?.me.Admin && (
        <button
          className="customDelButton absolute right-2 top-3"
          onClick={() =>
            deleteReview({
              variables: { input: { productId, _id: review._id } },
              update: (cache, data) => {
                cache.writeQuery({
                  query: ProductDocument,
                  data: data.data?.deleteReview,
                });
              },
            })
          }
        >
          <Delete />
        </button>
      )}
      <h3 className="text-md text-gray-300 mb-2">{review?.user?.email}</h3>
      <Rating value={review.rate} readOnly />
      <p className="text-base text-black">{review.description}</p>
      <h5 className="mr-auto text-right text-sm text-gray-400 pr-3 pb-1 ">
        {date.toDateString()}
      </h5>
    </div>
  );
};

export default ReviewCard;
