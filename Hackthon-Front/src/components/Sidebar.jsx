import { Layout, Menu } from "antd";
import { DashboardOutlined, QuestionOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      className="site-layout-background"
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        style={{ height: "100%", borderRight: 0, backgroundColor: "#C9D9A7" }}
      >
        <Menu.Item key="1" icon={<DashboardOutlined />}>
          Dashboard
        </Menu.Item>
        <Menu.Item key="2" icon={<QuestionOutlined />}>
          Perguntas
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
