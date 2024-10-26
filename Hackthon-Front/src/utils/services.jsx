import { api } from "../utils/api.jsx";
import { message } from "antd";

const submitQuestionnaire = async (data) => {
  try {
    const response = await api.post(`/quest`, data);
    message.success("Questionário enviado com sucesso!");
    return response.data;
  } catch (error) {
    message.error("Erro ao enviar o questionário. Tente novamente.");
    throw error;
  }
};

export { submitQuestionnaire };
