import Loginform from "../../components/Login.form";

const Adminlogin = () => {
  return (
    <div className="grid w-[100vw] h-[100vh] place-items-center">
      <Loginform AdminLogin={true} signUp={false} />
    </div>
  );
};

export default Adminlogin;
