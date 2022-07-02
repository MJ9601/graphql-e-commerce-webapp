import React from "react";

const Loginform = ({
  AdminLogin,
  signUp,
}: {
  AdminLogin: boolean;
  signUp: boolean;
}) => {
  return (
    <div className="rounded-lg bg-white ring-1 ring-gray-200 py-4 px-4 min-w-[300px]">
      <h3 className="text-lg font-semibold text-center font-serif">
        {signUp ? "Sign Up" : "Login"}{" "}
      </h3>
      <form action="" className="py-2 w-[100%] mt-4">
        <label htmlFor="" className="label">
          Email:
          <input type="email" name="" id="" className="input" />
        </label>
        <label htmlFor="" className="label">
          Password:
          <input type="password" name="" id="" className="input" />
        </label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default Loginform;
