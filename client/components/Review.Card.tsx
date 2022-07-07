import { Rating } from "@mui/material";
import React from "react";
import { Review } from "../graphql/generated";

const ReviewCard = ({ review }: { review: Review }) => {
  const date = new Date(review.createdAt);
  return (
    <div className="my-2 px-3 ring-1 ring-gray-200 rounded-md w-full">
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
