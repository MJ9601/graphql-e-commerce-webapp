import React from "react";

const ReviewFrom = () => {
  return (
    <div className="py-2">
      <form action="" className="space-y-4">
        <label htmlFor="" className="label">
          <textarea placeholder="Leave a comment" className="input h-24" />
        </label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default ReviewFrom;
