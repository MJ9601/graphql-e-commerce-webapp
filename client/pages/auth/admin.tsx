import { useRouter } from "next/router";
import { useEffect, useLayoutEffect } from "react";
import Loginform from "../../components/Login.form";
import { useMeQuery } from "../../graphql/generated";
import withApollo from "../../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

const Adminlogin = () => {
  const { data, error, loading, networkStatus } = useMeQuery({
    notifyOnNetworkStatusChange: true,
    ssr: true,
  });
  const router = useRouter();

  console.log({ data, error, networkStatus });
  useLayoutEffect(() => {
    if (data?.me.Admin) router.push("/admin");
  }, [data]);

  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <Loginform AdminLogin={true} signUp={false} />
    </div>
  );
};

export default withApollo(Adminlogin, { getDataFromTree });
