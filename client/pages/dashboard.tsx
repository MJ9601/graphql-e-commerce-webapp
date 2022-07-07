import React, { ReactElement } from "react";
import PageLayout from "../components/layout/PageLayout";
import ProductRow from "../components/Product.Row";
import UpdatePasswordfrom from "../components/UpdatePassword.from";
import withApollo from "../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";

const Dashboard = () => {
  return (
    <PageLayout>
      <div className="py-3 px-6 ">
        <div className="py-2">
          <h2 className="text-black text-lg font-bold text-start">
            shopping Card:
          </h2>
          <div className="space-y-2 py-3">
            <ProductRow product={""} />
            <ProductRow product={""} />
          </div>
          <button className="customButton w-full">Pay All</button>
        </div>
        <UpdatePasswordfrom Admin={false} />
      </div>
    </PageLayout>
  );
};

export default withApollo(Dashboard, { getDataFromTree });
