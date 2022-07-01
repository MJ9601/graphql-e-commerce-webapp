import React from "react";

const Loginform = ({ AdminLogin }: { AdminLogin: boolean }) => {
  return (
    <div className="rounded-lg bg-white ring-1 ring-gray-200 py-4 px-4 min-w-[300px]">
      <h3 className="text-lg font-semibold text-center font-serif">Login</h3>
      <form action="" className="py-2 w-[100%] mt-4">
        <label htmlFor="" className="w-[100%] text-lg flex flex-col gap-2">
          Email:
          <input
            type="email"
            name=""
            id=""
            className="outline-none rounded-sm py-1 px-3 ring-1 ring-gray-200 w-[100%]"
          />
        </label>
        <label htmlFor="" className="w-[100%] text-lg flex flex-col gap-2 my-3">
          Password:
          <input
            type="password"
            name=""
            id=""
            className="outline-none rounded-sm py-1 px-3 ring-1 ring-gray-200 w-[100%]"
          />
        </label>
        <input
          type="submit"
          value="Submit"
          className="w-[100%] font-[500] text-lg bg-blue-600 py-1 rounded-sm text-white cursor-pointer hover:tracking-wider  transition-all duration-300"
        />
      </form>
    </div>
  );
};

export default Loginform;
