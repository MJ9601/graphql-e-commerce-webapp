import Loginform from "../components/Login.form";

const Login = () => {
  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <Loginform AdminLogin={false} />
    </div>
  );
};

export default Login;
