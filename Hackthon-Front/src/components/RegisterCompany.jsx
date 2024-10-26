import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";
import { useState } from "react";

const RegisterCompany = () => {
  const navigate = useNavigate();

  const [buttonHover, setButtonHover] = useState(false);

  const onFinish = async (values) => {
    try {
      await register(values, navigate); 
      console.log("Registro bem-sucedido:", data);
    } catch (error) {
      console.error("Erro ao tentar registrar:", error.message);
    }
  };

  return (
    <Form
      name="register"
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
        hasFeedback
        rules={[
          {
            required: true,
            message: "Por favor insira o nome da empresa",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Nome da empresa" />
      </Form.Item>
      <Form.Item
        name="CNPJ"
        hasFeedback
        rules={[
          {
            required: true,
            message: "Por favor insira um CNPJ",
          },
        ]}
      >
        <Input prefix={<HomeOutlined />} placeholder="CNPJ da empresa" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[
          {
            required: true,
            message: "Please input your phone number!",
          },
        ]}
      >
        <Input
          prefix={<PhoneOutlined />}
          style={{
            width: "100%",
          }}
          placeholder="Número da empresa"
        />
      </Form.Item>
      <Form.Item
        name="email"
        hasFeedback
        rules={[
          {
            type: "email",
            message: "O e-mail inserido não é válido!",
          },
          {
            required: true,
            message: "Por favor insira um E-mail!",
          },
        ]}
      >
        <Input prefix={<MailOutlined />} placeholder="E-mail da empresa" />
      </Form.Item>
      <Form.Item
        name="password"
        hasFeedback
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
      <Form.Item
        name="confirm"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Por favor confirme sua senha!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("A nova senha que você digitou não corresponde!")
              );
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined />}
          type="password"
          placeholder="Confirmar Senha"
        />
      </Form.Item>
      <Form.Item>
        <Button
          block
          type="primary"
          htmlType="submit"
          style={{
            backgroundColor: buttonHover ? "#567A35" : "#3C5220",
            borderColor: "#3C5220",
            color: "#F2E8CF",
          }}
          onMouseEnter={() => setButtonHover(true)} 
          onMouseLeave={() => setButtonHover(false)}
        >
          Registrar
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterCompany;
