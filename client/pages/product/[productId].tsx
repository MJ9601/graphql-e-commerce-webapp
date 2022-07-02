import { ReactElement } from "react";
import PageLayout from "../../components/layout/PageLayout";
import ReviewCard from "../../components/Review.Card";
import ReviewFrom from "../../components/Review.From";

const Product = () => {
  return (
    <div className="py-3 my-3">
      <img
        src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80"
        className="w-full object-cover rounded-sm"
      />
      <div className="pt-3 w-full px-3">
        <div className="w-full  lg:flex justify-between items-start pt-3 mb-4 md:mb-1">
          <div>
            <h1 className="text-2xl font-bold text-black -mt-2 w-full">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              nihil error maxime.
            </h1>
            <h3 className="text-red-700 text-md font-semibold">#Sport</h3>
            <div className="py-1 pb-3 flex justify-start items-start gap-10">
              <h4 className="text-lg text-gray-600 font-semibold">
                Count:
                <span className="pl-3 text-red-600">240</span>
              </h4>
              <h4 className="text-lg text-gray-600 font-semibold">
                Price:
                <span className="pl-3 text-red-600">$240</span>
              </h4>
            </div>
          </div>
          <button className="customButton min-w-max">Add To Card</button>
        </div>
        <h4 className="text-lg text-black font-semibold">Description: </h4>
        <p className="text-base px-2 py-3">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id,
          repellendus quibusdam consequuntur maxime ipsum omnis tempora iure
          sed, iusto fugiat dolores placeat quaerat minus quas corporis
          deleniti, veniam non ex reprehenderit culpa ipsa enim? Ipsum atque
          veritatis maxime accusantium sapiente praesentium! Nulla nisi
          inventore qui alias quo assumenda voluptates? Aliquid!
        </p>
        <h4 className="text-lg mt-5 pt-5">Leave a Comment:</h4>
        <hr className="py-1 mt-4" />
        <div className="mt-4">
          <ReviewFrom />
        </div>
        <h4 className="text-lg mt-5 pt-5">Comments:</h4>
        <hr className="py-1 my-4" />
        <ReviewCard review={""} />
        <ReviewCard review={""} />
        <ReviewCard review={""} />
      </div>
    </div>
  );
};

Product.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Product;
