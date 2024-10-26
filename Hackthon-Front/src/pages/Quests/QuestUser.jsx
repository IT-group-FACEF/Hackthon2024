import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import { Form, Rate, Typography } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";
import { submitQuestionnaire } from "../../utils/services.jsx";

const { Title } = Typography;

const customIcons = {
  1: <FrownOutlined />,
  2: <FrownOutlined />,
  3: <MehOutlined />,
  4: <SmileOutlined />,
  5: <SmileOutlined />,
};

const questions = [
  {
    id: 1,
    question: "1. Estou satisfeito com quem sou?",
  },
  { id: 2, question: "2. A vida é gratificante para mim?" },
  { id: 3, question: "3. Acordo sem me sentir cansado?" },
  { id: 4, question: "4. Minhas experiências são divertidas?" },
];

const Quests = () => {
  const onFinish = async (values) => {
    console.log("Valores enviados:", values);
    try {
      const response = await submitQuestionnaire(values);
      console.log("Resposta do servidor:", response);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <div className="flex justify-center items-center w-full h-full p-10">
          <Form
            onFinish={onFinish}
            className="flex flex-col items-center justify-center min-w-full max-w-md px-4 space-y-6"
          >
            <Title level={2} className="text-center">
              Responda o questionário
            </Title>
            {questions.map(({ id, question }) => (
              <Form.Item
                key={id}
                name={`question_${id}`}
                className="flex flex-col items-center w-full"
                rules={[
                  {
                    required: true,
                    message: "Por favor, avalie esta questão!",
                  },
                ]}
                style={{ marginBottom: "20px", width: "100%" }}
              >
                <label className="text-lg mb-2 text-xl">{question}</label>
                <Rate
                  defaultValue={3}
                  character={({ index = 0 }) => customIcons[index + 1]}
                  className="flex justify-around py-5"
                  style={{ color: "#3C5220" }}
                />
              </Form.Item>
            ))}
            <Form.Item className="w-full flex justify-center">
              <Button
                typeButton="primary"
                htmlType="submit"
                buttonText={"Enviar"}
                style={{
                  backgroundColor: "#3C5220",
                  width: "200px",
                  height: "35px",
                }}
                className="w-full"
              />
            </Form.Item>
          </Form>
        </div>
      </Layout>
    </Layout>
  );
};

export default Quests;
