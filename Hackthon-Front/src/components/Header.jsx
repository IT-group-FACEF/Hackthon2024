import { Layout } from "antd"; 
const { Header } = Layout; 

const CustomHeader = () => {
  return (
    <Header className="bg-[#f5f5f5]">
      <h1 className="font-semibold uppercase">Dashboard</h1>
    </Header>
  );
};

export default CustomHeader;
