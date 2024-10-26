import { Layout, Menu } from "antd";

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="site-layout-background" style={{ padding: 0 }}>
      <Menu
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ backgroundColor: "#C9D9A7", color: "#567A35" }}
      >
        <Menu.Item key="1">Dashboard</Menu.Item>
        <Menu.Item key="2">Profile</Menu.Item>
        <Menu.Item key="3">Logout</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navbar;
