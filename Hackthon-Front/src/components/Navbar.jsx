import PropTypes from "prop-types";
import { Layout, Typography } from "antd";
import logo from "../assets/logo.png";

const { Header } = Layout;
const { Title } = Typography;

const Navbar = ({ title }) => {
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        backgroundColor: "#C9D9A7",
        height: "90px",
        display: "flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center pl-[30px] py-[10px]">
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px" }}
          />
        </div>
        
        <div className="flex items-center pr-[30px]">
          <Title
            level={3}
            style={{ color: "#567A35", fontWeight: "bold", margin: 0 }}
          >
            {title.toUpperCase()}
          </Title>
        </div>
      </div>
    </Header>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
