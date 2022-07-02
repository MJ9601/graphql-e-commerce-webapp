import React from "react";

const ReviewCard = ({ review }: { review: any }) => {
  return (
    <div className="my-2 px-3 ring-1 ring-gray-200 rounded-md w-full">
      <h3 className="text-md text-gray-300 mb-2">email</h3>
      <p className="text-base text-black">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, vero.
        Obcaecati maxime similique natus ab quaerat officia libero sunt minima
        excepturi non, optio repellendus amet inventore voluptas blanditiis
        deserunt, illum ducimus voluptatem voluptatum delectus velit dolorum.
        Obcaecati voluptates, ipsa reprehenderit, provident animi at molestias
        aperiam a voluptatem porro ad. Assumenda.
      </p>
      <h5 className="mr-auto text-right text-sm text-gray-400 pr-3 pb-1 ">
        date
      </h5>
    </div>
  );
};

export default ReviewCard;
