import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const User = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar title={"Dashboard"} />
      <Layout>
        <Sidebar />
        <Layout style={{ display: "flex" }}>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                minHeight: "300px",
                maxWidth: "500px",
                padding: "0 10px",
              }}
            >
            </div>
            <div
              style={{
                flex: 1,
                minHeight: "300px",
                maxWidth: "700px",
                padding: "0 10px",
              }}
            >
            </div>
          </Layout>
          <Layout
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <h3>Users</h3>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default User;
