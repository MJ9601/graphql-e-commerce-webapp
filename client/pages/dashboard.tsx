import React, { ReactElement } from "react";
import PageLayout from "../components/layout/PageLayout";
import ProductRow from "../components/Product.Row";
import UpdatePasswordfrom from "../components/UpdatePassword.from";
import withApollo from "../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useAppSelector } from "../utils/cms/app/hooks";
import { selectUserPageDis, UserOp } from "../utils/cms/features/userNavSlice";
import { Product, useUserQuery } from "../graphql/generated";

const Dashboard = () => {
  const mainDis = useAppSelector(selectUserPageDis);
  const { data, loading } = useUserQuery();
  return (
    <PageLayout>
      <div className="py-3 px-6 ">
        <div className="py-2">
          <>
            {mainDis == UserOp.shoppingCard && (
              <>
                <h2 className="text-black text-lg font-bold text-start">
                  shopping Card:
                </h2>
                <div className="space-y-2 py-3">
                  {data?.User.shoppingCard.map((product) => (
                    <ProductRow
                      product={product as Product}
                      key={product?._id}
                    />
                  ))}
                </div>
                <button className="customButton w-full">Pay All</button>
              </>
            )}
          </>
          <>
            {mainDis == UserOp.boughtCard && (
              <>
                <h2 className="text-black text-lg font-bold text-start">
                  Bought Products:
                </h2>
                <div className="space-y-2 py-3">
                  {data?.User.boughtProduct.map((product) => (
                    <ProductRow
                      product={product as Product}
                      boughtProduct
                      key={product._id}
                    />
                  ))}
                </div>
              </>
            )}
          </>
        </div>
        {mainDis == UserOp.passChange && <UpdatePasswordfrom Admin={false} />}
      </div>
    </PageLayout>
  );
};

export default withApollo(Dashboard, { getDataFromTree });
