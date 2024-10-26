import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  QuestionOutlined,
  UserOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState("1");

  useEffect(() => {
    switch (location.pathname) {
      case "/dashboard":
        setSelectedKey("1");
        break;
      case "/quests":
        setSelectedKey("2");
        break;
      case "/users":
        setSelectedKey("3");
        break;
      case "/login":
        setSelectedKey("4");
        break;
      default:
        setSelectedKey("1"); 
    }
  }, [location.pathname]);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => console.log(broken)}
      onCollapse={(collapsed, type) => console.log(collapsed, type)}
      className="site-layout-background"
    >
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        style={{
          height: "100%",
          borderRight: 0,
          backgroundColor: "#C9D9A7",
          paddingTop: "10px",
        }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          <Link to="/dashboard">Dashboard</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<QuestionOutlined />}>
          <Link to="/quests">Perguntas</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UserOutlined />}>
          <Link to="/users">Usuários</Link>
        </Menu.Item>
        <Menu.Item
          key="4"
          icon={<ArrowLeftOutlined />}
          style={{ marginTop: "auto" }}
        >
          <Link to="/login" onClick={() => localStorage.clear()}>
            Sair
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
