import React, { ReactElement, useEffect } from "react";
import Categorymodal from "../components/Category.modal";
import PageLayout from "../components/layout/PageLayout";
import ProductCard from "../components/Product.Card";
import Productmodal from "../components/Product.modal";
import UpdatePasswordfrom from "../components/UpdatePassword.from";
import withApollo from "../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { useMeQuery } from "../graphql/generated";
import { useRouter } from "next/router";

const Admin = () => {
  const { data, loading, networkStatus } = useMeQuery({
    notifyOnNetworkStatusChange: true,
  });
  const router = useRouter();

  console.log({ data, networkStatus, loading });

  useEffect(() => {
    if (!data?.me.Admin) router.push("/auth/admin");
  }, []);
  return (
    <PageLayout>
      <div className="py-5 px-5">
        <div className="py-2">
          <h2 className="text-black text-lg font-bold text-start">Products:</h2>
          <div className="gap-3 py-3 flex flex-wrap justify-center items-start"></div>
        </div>
        <UpdatePasswordfrom Admin={true} />
        <Productmodal />
        <Categorymodal />
      </div>
    </PageLayout>
  );
};

export default withApollo(Admin, { getDataFromTree });
