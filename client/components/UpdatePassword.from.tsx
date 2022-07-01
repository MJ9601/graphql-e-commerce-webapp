import React from "react";

const UpdatePasswordfrom = ({ Admin }: { Admin: boolean }) => {
  return (
    <div className="w-full">
      <h3 className="text-xl py-3">Update Password</h3>
      <form action="" className="py-3 px-6 space-y-3">
        <label htmlFor="" className="label">
          Email:
          <input type="email" className="input" />
        </label>
        <label htmlFor="" className="label">
          Password:
          <input type="password" className="input" />
        </label>
        <label htmlFor="" className="label">
          New Password:
          <input type="password" className="input" />
        </label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default UpdatePasswordfrom;
