import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useLoginMutation } from "../graphql/generated";

const Loginform = ({
  AdminLogin,
  signUp,
}: {
  AdminLogin: boolean;
  signUp: boolean;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [login, { data, error, loading }] = useLoginMutation({
    notifyOnNetworkStatusChange: true,
    variables: { input: { email, password } },
  });

  const handelSubmit = (e: any) => {
    e.preventDefault();
    if (password && email) {
      if (!signUp) {
        login();
      }
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (data?.login.accessToken) router.push("/admin");
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
