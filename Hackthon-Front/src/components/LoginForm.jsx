import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Flex } from "antd";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const navigate = useNavigate();
  const [buttonHover, setButtonHover] = useState(false);

  const onFinish = async (values) => {
    try {
      await login(values, navigate);
      console.log("Registro bem-sucedido:", data);
    } catch (error) {
      console.error("Erro ao tentar registrar:", error.message);
    }
  };

  return (
    <Form
      name="login"
      initialValues={{
        remember: true,
      }}
      style={{
        maxWidth: 360,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Por favor insira seu usuário!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Usuário" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Por favor insira uma senha!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Senha"
        />
      </Form.Item>
      <Form.Item>
        <Flex justify="space-between" align="center">
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Manter-me logado </Checkbox>
          </Form.Item>
          <span
            style={{
              color: "#3C5220",
              cursor: "pointer",
            }}
            onMouseOver={(e) => (e.target.style.color = "#567A35")}
            onMouseOut={(e) => (e.target.style.color = "#3C5220")}
          >
            Esqueceu sua senha?
          </span>
        </Flex>
      </Form.Item>

      <Form.Item>
        {/* Estilo para o botão com hover */}
        <Button
          block
          style={{
            backgroundColor: buttonHover ? "#567A35" : "#3C5220",
            borderColor: "#3C5220",
            color: "#F2E8CF",
          }}
          htmlType="submit"
          onMouseEnter={() => setButtonHover(true)}
          onMouseLeave={() => setButtonHover(false)}
        >
          Entrar
        </Button>
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <span>Não possui conta?</span>
          <div style={{ marginTop: "10px" }}>
            <Button
              type="link"
              style={{ color: "#3C5220", fontWeight: "bold" }}
              onClick={() => navigate("/registerUser")}
              onMouseOver={(e) => (e.target.style.color = "#567A35")}
              onMouseOut={(e) => (e.target.style.color = "#3C5220")}
            >
              Registre-se como Usuário
            </Button>
            <Button
              type="link"
              style={{ color: "#3C5220", fontWeight: "bold" }}
              onClick={() => navigate("/registerCompany")}
              onMouseOver={(e) => (e.target.style.color = "#567A35")}
              onMouseOut={(e) => (e.target.style.color = "#3C5220")}
            >
              Registre-se como Empresa
            </Button>
          </div>
        </div>
      </Form.Item>
    </Form>
  );
};

export default App;
