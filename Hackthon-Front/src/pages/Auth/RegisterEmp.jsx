import RegisterCompany from "../../components/RegisterCompany";
import imgCompany from "../../assets/imgCompany.svg";
import logo from "../../assets/logo.png";

const RegisterEmp = () => {
  return (
    <section className="flex justify-center items-center min-h-screen text-center bg-[#F2E8CF]">
      <div className="flex flex-col md:flex-row justify-center items-center w-full">
        <div className="hidden md:flex h-auto w-full max-w-md p-8 items-center bg-[#567A35] rounded-l-[20px]">
          <img
            src={imgCompany}
            alt="Cadastro"
            className="w-full h-[480px] max-h-90 object-contain"
          />
        </div>
        <div className="flex flex-col justify-center items-center bg-[#A4B979] p-8 md:p-12 h-auto w-full max-w-md rounded-[20px] md:rounded-r-[20px] md:rounded-l-none">
          <div className="flex md:hidden justify-center mb-4">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <div className="mb-8">Cadastre-se como empresa</div>
          <RegisterCompany />
        </div>
      </div>
    </section>
  );
};

export default RegisterEmp;
