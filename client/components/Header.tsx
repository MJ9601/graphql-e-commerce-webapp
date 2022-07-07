import { Login, Logout } from "@mui/icons-material";
import { useRouter } from "next/router";
import React from "react";
import { useLogoutMutation, useMeQuery } from "../graphql/generated";

const Header = () => {
  const { data, loading, error, networkStatus } = useMeQuery({
    notifyOnNetworkStatusChange: true,
  });

  const router = useRouter();

  const [logout, { data: logoutData }] = useLogoutMutation();

  console.log(logoutData?.logout.accessToken);

  const user = data?.me;
  return (
    <div className="z-[100] bg-green-200 sticky top-0">
      <div className="flex container mx-auto justify-between items-center py-1">
        <div
          className="flex justify-start gap-2 items-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src="images/logo.png"
            alt=""
            className="w-[70px] h-[50px] object-cover cursor-pointer"
          />
          <h2 className="text-xl font-[600] font-serif">Shopping</h2>
        </div>
        <div className="flex justify-end gap-2 mr-2">
          {!user ? (
            <>
              <h3
                className="catButton min-w-[90px] hidden md:block font-serif py-5 -mb-3"
                onClick={() => router.push("/auth/login")}
              >
                Login
              </h3>
              <h2
                className="md:hidden"
                onClick={() => router.push("/auth/login")}
              >
                <Login className="text-2xl text-black mr-4 cursor-pointer" />
              </h2>
            </>
          ) : (
            <>
              <h3 className="catButton min-w-[100px] hidden md:block font-serif py-5 -mb-3">
                Sign out
              </h3>
              <h2 className="md:hidden">
                <Logout
                  className="text-2xl text-black mr-4 cursor-pointer"
                  onClick={() => logout()}
                />
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
