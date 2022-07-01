import React from "react";
import { LoginIcon } from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="z-[100] bg-green-200 sticky top-0">
      <div className="flex container mx-auto justify-between items-center py-1">
        <div className="flex justify-start gap-2 items-center ">
          <img
            src="images/logo.png"
            alt=""
            className="w-[70px] h-[50px] object-cover cursor-pointer"
          />
          <h2 className="text-xl font-[600] font-serif">Shopping</h2>
        </div>
        <div className="flex justify-end gap-2">
          <h3 className="catButton min-w-[90px] hidden md:block font-serif py-5 -mb-3">
            Login
          </h3>
          <LoginIcon className="h-6 md:hidden pr-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
