import App from "../../components/LoginForm";
import imgLogin from "../../assets/loginImg.svg";
import logo from "../../assets/logo.png";

const Login = () => {
  return (
    <section className="flex justify-center items-center min-h-screen text-center bg-[#F2E8CF]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="bg-[#A4B979] p-8 md:p-12 h-auto w-full max-w-md rounded-[20px] md:rounded-l-[20px] md:rounded-r-none">
          <div className="flex md:hidden justify-center mb-4">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <div className="mb-8">Faça Login com sua conta</div>
          <App />
        </div>
        <div className="hidden md:flex h-[502px] w-full max-w-md p-8 items-center bg-[#567A35] rounded-r-[20px]">
          <img
            src={imgLogin}
            alt="Login"
            className="w-full h-[364px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
