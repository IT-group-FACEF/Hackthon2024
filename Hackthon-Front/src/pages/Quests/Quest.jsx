import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Button from "../../components/Button";
import { Form, Rate, Typography } from "antd";
import { FrownOutlined, MehOutlined, SmileOutlined } from "@ant-design/icons";

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
    question:
      "1. Eu não me sinto particularmente satisfeito com o jeito que sou.",
  },
  { id: 2, question: "2. Sou uma pessoa muito interessada em outras pessoas." },
  { id: 3, question: "3. Sinto que a vida é muito gratificante." },
  {
    id: 4,
    question: "4. Tenho sentimentos muito afetivos em relação a quase todos.",
  },
  { id: 5, question: "5. Raramente acordo me sentindo cansado." },
  {
    id: 6,
    question:
      "6. Eu não estou, particularmente, otimista em relação ao futuro.",
  },
  {
    id: 7,
    question: "7. Sinto que a maioria das minhas experiências são divertidas.",
  },
  {
    id: 8,
    question:
      "8. Estou sempre comprometido e envolvido com várias iniciativas.",
  },
  { id: 9, question: "9. A vida é boa." },
  {
    id: 10,
    question: "10. Eu não acho que o mundo seja um bom lugar para viver.",
  },
  { id: 11, question: "11. Eu me encontro, sempre sorrindo muito." },
  { id: 12, question: "12. Estou bem satisfeito com tudo em minha vida." },
  { id: 13, question: "13. Eu não me sinto uma pessoa atraente." },
  {
    id: 14,
    question:
      "14. Existe uma lacuna entre o que gostaria de fazer e o que faço.",
  },
  { id: 15, question: "15. Estou muito feliz." },
  { id: 16, question: "16. Eu encontro beleza e harmonia nas coisas." },
  { id: 17, question: "17. Sempre consigo provocar alegria nas pessoas." },
  {
    id: 18,
    question: "18. Sempre encontro tempo para tudo que quero realizar.",
  },
  { id: 19, question: "19. Sinto que não tenho controle da minha vida." },
  {
    id: 20,
    question: "20. Sinto-me capaz de levar diversas iniciativas adiante.",
  },
  { id: 21, question: "21. Eu me considero uma pessoa mentalmente alerta." },
  {
    id: 22,
    question: "22. Muitas vezes me sinto experimentando alegria e euforia.",
  },
  {
    id: 23,
    question: "23. Sinto que não é fácil tomar decisões, em várias situações.",
  },
  {
    id: 24,
    question: "24. Sinto não ter um significado e propósito em minha vida.",
  },
  { id: 25, question: "25. Sinto que tenho um nível elevado de energia." },
  {
    id: 26,
    question:
      "26. Eu geralmente exerço uma boa influência sobre os acontecimentos.",
  },
  { id: 27, question: "27. Não costumo me divertir com outras pessoas." },
  {
    id: 28,
    question: "28. Não me sinto, particularmente, uma pessoa saudável.",
  },
  {
    id: 29,
    question:
      "29. Não tenho, particularmente, lembranças felizes do meu passado.",
  },
];

const Quests = () => {
  const onFinish = (values) => {
    console.log("Valores enviados:", values);
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
