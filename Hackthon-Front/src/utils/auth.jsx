import { api } from "./api";
import { message } from "antd";

export const login = async (credentials, navigate) => {
  try {
    const response = await api.post("/login", credentials);

    if (response.status === 200) {
      message.success("Login bem-sucedido!");
      navigate("/dashboard");
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message ||
        (error.response.status === 401
          ? "Credenciais inválidas"
          : "Erro no servidor. Tente novamente mais tarde.");

      message.error(errorMessage);
    } else {
      message.error("Erro de conexão. Verifique sua rede e tente novamente.");
    }
    throw error;
  }
};

export const register = async (userData, navigate) => {
  try {
    const response = await api.post("/register", userData);

    if (response.status === 200) {
      message.success("Registro bem-sucedido!");
      navigate("/login");
      return response.data;
    }
  } catch (error) {
    if (error.response) {
      const errorMessage =
        error.response.data?.message ||
        (error.response.status === 400
          ? "Dados inválidos. Verifique e tente novamente."
          : "Erro no servidor. Tente novamente mais tarde.");

      message.error(errorMessage);
    } else {
      message.error("Erro de conexão. Verifique sua rede e tente novamente.");
    }
    throw error;
  }
};
