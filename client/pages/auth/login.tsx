import { useState } from "react";
import Loginform from "../../components/Login.form";

const Login = () => {
  const [signUp, setSignUp] = useState(false);
  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <div>
        <Loginform AdminLogin={false} signUp={signUp} />
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

export default Login;
