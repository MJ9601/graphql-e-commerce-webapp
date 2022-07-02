import React from "react";

const DashboardNav = () => {
  const Admin = true;
  return (
    <div className="py-2 ">
      <h2 className="text-xl text-black px-3 font-bold ">mail@mail.com</h2>
      {!Admin ? (
        <div className="space-y-1 mt-5">
          <h3 className="catButton pt-0">Shopping Card</h3>
          <h3 className="catButton pt-0 -mt-2">Empty Shopping Card</h3>
          <h3 className="catButton pt-0 -mt-2">Bought Products</h3>
        </div>
      ) : (
        <>
          <div className="space-y-1 mt-5">
            <h3 className="catButton pt-0"> Products</h3>
            <h3 className="catButton pt-0 -mt-3">Categories</h3>
          </div>
          <div className="space-y-1 mt-5 px-3">
            <h3 className="text-xl text-black pt-12 font-bold ">Settings</h3>
            <h3 className="catButton pt-0"> Add Product</h3>
            <h3 className="catButton pt-0"> Add Category</h3>
            <h3 className="catButton pt-0">Delete All Products</h3>
            <h3 className="catButton pt-0 -mt-2">Delete All Categories</h3>
          </div>
        </>
      )}
      <div className="px-3 pt-2">
        <h3 className="text-xl text-black pt-12 font-bold ">
          Account Settings
        </h3>
        <h3 className="catButton pt-2">Change Password</h3>
      </div>
    </div>
  );
};

export default DashboardNav;
