import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import React, { useState } from "react";
import { useMeQuery } from "../graphql/generated";
import DashboardNav from "./Dashboard.Nav";
import HomeNav from "./Home.Nav";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const { data } = useMeQuery();
  const user = data?.me;
  return (
    <div className="relative z-[100] md:z-0">
      <div
        className={`${
          showNav ? "left-[0]" : "left-[-245px]"
        } bg-green-200 min-h-[100vh] fixed md:relative w-[250px] md:w-max transition-all duration-300 md:left-0 md:min-w-[250px] md:bg-white`}
      >
        <div
          className="absolute w-[50px] h-[50px] rounded-full top-[45%] right-[-20px] bg-green-200 cursor-pointer md:hidden"
          onClick={() => setShowNav(!showNav)}
        >
          {!showNav ? (
            <ArrowForwardIos className="text-black h-6 absolute top-3 left-7 animate-bounceX" />
          ) : (
            <ArrowBackIos className="text-black h-6 absolute top-3 left-7 animate-bounceX" />
          )}
        </div>

        {!user ? <HomeNav /> : <DashboardNav />}
      </div>
    </div>
  );
};

export default Navbar;
