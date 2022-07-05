import { useRouter } from "next/router";
import { useEffect } from "react";
import Loginform from "../../components/Login.form";
import { useMeQuery } from "../../graphql/generated";
import withApollo from "../../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";

const Adminlogin = () => {
  const { data, error, loading, networkStatus } = useMeQuery({
    notifyOnNetworkStatusChange: true,
    ssr: true,
  });
  const router = useRouter();

  console.log({ data, error, networkStatus });
  useEffect(() => {
    if (data?.me.Admin) router.push("/admin");
  }, []);

  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <Loginform AdminLogin={true} signUp={false} />
    </div>
  );
};

export default withApollo(Adminlogin, { getDataFromTree });

// export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {};
