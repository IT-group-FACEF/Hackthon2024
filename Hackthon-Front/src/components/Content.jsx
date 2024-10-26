import { Layout } from "antd";
import Card from "./Card";

const { Content } = Layout;

const DashboardContent = () => {
  return (
    <Content
      style={{
        padding: "0 50px",
      }}
    >
      <div
        className="site-layout-content"
        style={{ padding: 24, minHeight: 380 }}
      >
        <Card title="Sales" value="$12,000" />
        <Card title="Users" value="1,200" />
        <Card title="Performance" value="87%" />
      </div>
    </Content>
  );
};

export default DashboardContent;
