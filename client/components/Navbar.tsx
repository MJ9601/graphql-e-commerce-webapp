import React, { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  return (
    <div className="relative">
      <div
        className={`${
          showNav ? "left-[0]" : "left-[-245px]"
        } bg-green-200 min-h-[100vh] absolute w-[250px] transition-all duration-300 md:left-0 md:min-w-[250px] md:bg-white`}
      >
        <div
          className="absolute w-[50px] h-[50px] rounded-full top-[45%] right-[-20px] bg-green-200 cursor-pointer md:hidden"
          onClick={() => setShowNav(!showNav)}
        ></div>

        <div className="pt-6">
          <h2 className="text-lg font-semibold px-2">Categories: </h2>
          <div className="pt-3">
            <h5 className="catButton">sport</h5>
            <h5 className="catButton">sport</h5>
            <h5 className="catButton">sport</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
