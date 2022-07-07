import { Rating } from "@mui/material";
import React, { useState } from "react";

const ReviewFrom = () => {
  const [value, setValue] = useState(0);
  return (
    <div className="py-2">
      <form action="" className="space-y-4">
        <Rating
          value={value}
          onChange={(e, newValue) => {
            setValue(newValue as number);
          }}
          name="simple-controlled"
        />
        <label htmlFor="" className="label">
          <textarea placeholder="Leave a comment" className="input h-24" />
        </label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default ReviewFrom;
