import React, { ReactElement } from "react";
import Categorymodal from "../components/Category.modal";
import PageLayout from "../components/layout/PageLayout";
import ProductCard from "../components/Product.Card";
import Productmodal from "../components/Product.modal";
import UpdatePasswordfrom from "../components/UpdatePassword.from";

const Admin = () => {
  return (
    <div className="py-5 px-5">
      <div className="py-2">
        <h2 className="text-black text-lg font-bold text-start">Products:</h2>
        <div className="gap-3 py-3 flex flex-wrap justify-center items-start">
          <ProductCard product={""} AdminAccess={true} />
          <ProductCard product={""} AdminAccess={true} />
        </div>
      </div>
      <UpdatePasswordfrom Admin={true} />
      <Productmodal />
      <Categorymodal />
    </div>
  );
};

Admin.getLayout = (page: ReactElement) => <PageLayout>{page}</PageLayout>;
export default Admin;
