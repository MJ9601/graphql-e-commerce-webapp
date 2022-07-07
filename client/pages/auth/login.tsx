import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useState } from "react";
import Loginform from "../../components/Login.form";
import { MeDocument, MeQuery, useMeQuery } from "../../graphql/generated";
import withApollo, { _ApolloClient } from "../../utils/apolloClient";
import { getDataFromTree } from "@apollo/client/react/ssr";

const Login = () => {
  const router = useRouter();
  const { data } = useMeQuery();

  const [signUp, setSignUp] = useState(false);
  const [success, setSuccess] = useState(false);

  useLayoutEffect(() => {
    if (data?.me && !data.me.Admin) router.push("/dashboard");
  }, [data]);
  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <div>
        <>
          {signUp ? (
            <Loginform
              AdminLogin={false}
              signUp={signUp}
              setSignUp={setSignUp}
              setSuccess={setSuccess}
            />
          ) : (
            <Loginform AdminLogin={false} signUp={signUp} />
          )}
        </>
        <div className="mt-10 flex justify-center items-center flex-col gap-2">
          <button
            className="catButton min-w-fit"
            onClick={() => setSignUp(!signUp)}
          >
            {!signUp ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default withApollo(Login, { getDataFromTree });
