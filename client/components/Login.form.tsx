import { useRouter } from "next/router";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import {
  AllUsersDocument,
  useCreateNormalUserMutation,
  useLoginMutation,
} from "../graphql/generated";

const Loginform = ({
  AdminLogin,
  signUp,
  setSignUp,
  setSuccess,
}: {
  AdminLogin: boolean;
  signUp: boolean;
  setSignUp?: Dispatch<SetStateAction<boolean>>;
  setSuccess?: Dispatch<SetStateAction<boolean>>;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [createUser, { data: user }] = useCreateNormalUserMutation();

  const [login, { data, error, loading }] = useLoginMutation({
    notifyOnNetworkStatusChange: true,
    variables: { input: { email, password } },
  });

  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (password && email) {
      if (!signUp) {
        login();
      } else {
        createUser({
          variables: { input: { email, password } },
          update: (cache, data) => {
            cache.updateQuery(
              {
                query: AllUsersDocument,
              },
              (_data) => ({
                allUsers: _data.allUsers.push(data.data?.createNormalUser),
              })
            );
          },
        });
        if (setSuccess) setSuccess(true);
        if (setSignUp) setSignUp(false);
      }
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (data?.login.accessToken && AdminLogin) router.push("/admin");
    if (data?.login.accessToken && !AdminLogin) router.push("/dashboard");
  }, [data]);

  return (
    <div className="rounded-lg bg-white ring-1 ring-gray-200 py-4 px-4 min-w-[300px]">
      <h3 className="text-lg font-semibold text-center font-serif">
        {signUp ? "Sign Up" : "Login"}{" "}
      </h3>
      <form action="" className="py-2 w-[100%] mt-4" onSubmit={handelSubmit}>
        <label htmlFor="email" className="label">
          Email:
          <input
            type="email"
            id="email"
            className="input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password" className="label">
          Password:
          <input
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" className="submitButton" />
      </form>
    </div>
  );
};

export default Loginform;
