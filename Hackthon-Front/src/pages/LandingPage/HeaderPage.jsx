import logo from "../../assets/logo.png";
import Button from "../../components/Button.jsx";

const Header = () => {
  // Função para rolar até a seção pelo id
  const scrollToSection = (targetId) => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="flex justify-between items-center px-4 py-2 bg-[#C9D9A7] w-full fixed top-0 z-50"
      style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="flex">
        <a href="/">
          <img className="h-[50px] w-[70px]" src={logo} alt="Logo" />
        </a>
      </div>

      {/* Botões de Âncoras */}
      <div className="flex space-x-4 flex-row items-center justify-center">
        <Button
          buttonText="Benefícios"
          typeButton="text"
          onClick={() => scrollToSection("unlock")}
        />
        <Button
          buttonText="Comunidade"
          typeButton="text"
          onClick={() => scrollToSection("achievements")}
        />
        <Button
          buttonText="Sua Empresa"
          typeButton="text"
          onClick={() => scrollToSection("caring")}
        />
      </div>

      {/* Botões de Login e Cadastro */}
      <div className="flex space-x-4">
        <Button
          buttonText="Entrar"
          typeButton="text"
          onClick={() => (window.location.href = "/login")}
        />
        <Button
          buttonText="Registrar para Usuários"
          typeButton="primary"
          onClick={() => (window.location.href = "/registerUser")}
          style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
        />
        <Button
          buttonText="Registrar para Empresas"
          typeButton="primary"
          onClick={() => (window.location.href = "/registerCompany")}
          style={{ backgroundColor: "#3C5220", color: "#FFFFFF" }}
        />
      </div>
    </div>
  );
};

export default Header;
